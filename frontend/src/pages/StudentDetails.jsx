import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pencil } from "lucide-react";

import { getStudentById } from "../api/studentApi";

const StudentDetails = () => {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadStudent = async () => {
    try {
      const response = await getStudentById(id);

      setStudent(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center mx-auto h-8 w-8 border-2 mt-10 border-blue-400 border-t-0 animate-spin rounded-full "></h2>
    );
  }

  if (error) {
    return <h2 className="p-6 text-red-500">{error}</h2>;
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Link to="/" className="mb-6 inline-block text-blue-600 hover:underline">
        ← Back to Students
      </Link>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              {student.firstName} {student.lastName}
            </h1>

            <p className="mt-2 text-gray-600">{student.email}</p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              student.status === "PASS"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {student.status}
          </span>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">Age</p>

            <p className="font-semibold">{student.age}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Grade</p>

            <p className="font-semibold">{student.grade}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Total Marks</p>

            <p className="font-semibold">{student.totalMarks}</p>
          </div>
        </div>

        <table className="mb-8 w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Subject</th>

              <th className="py-3 text-left">Marks</th>
            </tr>
          </thead>

          <tbody>
            {student.marks.map((mark) => (
              <tr key={mark.subjectId} className="border-b">
                <td className="py-3">{mark.subject}</td>

                <td className="py-3">{mark.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link
          to={`/students/${student.id}/edit`}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          <Pencil size={18} />
          Edit Student
        </Link>
      </div>
    </div>
  );
};

export default StudentDetails;
