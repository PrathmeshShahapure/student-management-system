import { createStudentService ,getStudentsService} from "../services/studentService.js";

export const createStudent = async (req, res) => {
  try {
    const student = await createStudentService(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await getStudentsService(req.query);
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
