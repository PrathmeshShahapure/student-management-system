import { Pencil, Trash2, Eye } from "lucide-react";

const StudentTable = ({ students, onEdit, onDelete, onView }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>

            <th className="px-4 py-3 text-left">First Name</th>

            <th className="px-4 py-3 text-left">Last Name</th>

            <th className="px-4 py-3 text-left">Email</th>

            <th className="px-4 py-3 text-left">Age</th>

            <th className="px-4 py-3 text-left">Grade</th>

            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-8 text-center text-gray-500">
                No students found.
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr
                key={student.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{student.id}</td>

                <td className="px-4 py-3">{student.firstName}</td>

                <td className="px-4 py-3">{student.lastName}</td>

                <td className="px-4 py-3">{student.email}</td>

                <td className="px-4 py-3">{student.age}</td>

                <td className="px-4 py-3">{student.grade}</td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onView(student.id)}
                      className="text-gray-600 hover:text-black hover:cursor-pointer"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(student.id)}
                      className="text-blue-600 hover:text-blue-800 hover:cursor-pointer"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(student.id)}
                      className="text-red-600 hover:text-red-800 hover:cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
