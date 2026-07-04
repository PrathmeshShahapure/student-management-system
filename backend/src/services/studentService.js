import pool from "../config/db.js";

const PASSING_MARKS = 120;

export const createStudentService = async (studentData) => {
  const client = await pool.connect();

  try {
    const { firstName, lastName, email, age, grade, marks } = studentData;

    // Basic validation
    if (!Array.isArray(marks) || marks.length === 0) {
      throw new Error("Marks are required.");
    }

    await client.query("BEGIN");

    // Insert student
    const studentQuery = `
      INSERT INTO students
      (first_name, last_name, email, age, grade)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const studentValues = [firstName, lastName, email, age, grade];

    const studentResult = await client.query(studentQuery, studentValues);

    const createdStudent = studentResult.rows[0];

    // Insert marks
    const markQuery = `
      INSERT INTO marks
      (student_id, subject_id, marks)
      VALUES ($1, $2, $3);
    `;

    for (const mark of marks) {
      await client.query(markQuery, [
        createdStudent.id,
        mark.subjectId,
        mark.marks,
      ]);
    }

    // Fetch inserted marks with subject names
    const marksResult = await client.query(
      `
      SELECT
        m.subject_id,
        s.name AS subject,
        m.marks
      FROM marks m
      INNER JOIN subjects s
        ON m.subject_id = s.id
      WHERE m.student_id = $1
      ORDER BY m.subject_id;
      `,
      [createdStudent.id],
    );

    const formattedMarks = marksResult.rows.map((mark) => ({
      subjectId: mark.subject_id,
      subject: mark.subject,
      marks: mark.marks,
    }));

    // Calculate total
    const totalMarks = formattedMarks.reduce(
      (total, mark) => total + mark.marks,
      0,
    );

    // Calculate result
    const status = totalMarks >= PASSING_MARKS ? "PASS" : "FAIL";

    await client.query("COMMIT");

    return {
      id: createdStudent.id,
      firstName: createdStudent.first_name,
      lastName: createdStudent.last_name,
      email: createdStudent.email,
      age: createdStudent.age,
      grade: createdStudent.grade,
      createdAt: createdStudent.created_at,
      marks: formattedMarks,
      totalMarks,
      status,
    };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};
