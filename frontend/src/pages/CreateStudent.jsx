import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { createStudent } from "../api/studentApi";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  grade: "",
  mathMarks: "",
  scienceMarks: "",
  englishMarks: "",
};

const CreateStudent = () => {
  const navigate = useNavigate();

  const handleCreate = async (studentData) => {
    try {
      await createStudent(studentData);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Create Student</h1>

      <StudentForm
        defaultValues={defaultValues}
        onSubmit={handleCreate}
        buttonText="Create Student"
      />
    </div>
  );
};

export default CreateStudent;
