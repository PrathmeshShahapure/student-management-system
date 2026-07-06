import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import StudentForm from "../components/StudentForm";
import { getStudentById, updateStudent } from "../api/studentApi";
import { toStudentForm } from "../utils/studentMapper";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadStudent = async () => {
    try {
      const response = await getStudentById(id);
      setStudent(toStudentForm(response.data));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const handleUpdate = async (studentData) => {
    try {
      await updateStudent(id, studentData);
          toast.success("Student data Updated");
      navigate("/");
    } catch (err) {
      console.error(err);
            toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  if (loading) {
    return (
      <h2 className="text-center mx-auto h-8 w-8 border-2 mt-10 border-blue-400 border-t-0 animate-spin rounded-full "></h2>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Edit Student</h1>

      <StudentForm
        defaultValues={student}
        onSubmit={handleUpdate}
        buttonText="Update Student"
      />
    </div>
  );
};

export default EditStudent;
