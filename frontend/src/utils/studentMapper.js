export const toStudentPayload = (formData) => {
  return {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    age: Number(formData.age),
    grade: Number(formData.grade),
    marks: [
      {
        subjectId: 1,
        marks: Number(formData.mathMarks),
      },
      {
        subjectId: 2,
        marks: Number(formData.scienceMarks),
      },
      {
        subjectId: 3,
        marks: Number(formData.englishMarks),
      },
    ],
  };
};

export const toStudentForm = (student) => {
  const marks = Object.fromEntries(
    student.marks.map((mark) => [mark.subjectId, mark.marks]),
  );

  return {
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    age: student.age,
    grade: student.grade,
    mathMarks: marks[1] ?? "",
    scienceMarks: marks[2] ?? "",
    englishMarks: marks[3] ?? "",
  };
};
