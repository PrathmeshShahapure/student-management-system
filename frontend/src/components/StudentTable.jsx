const StudentTable = ({ students }) => {
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
              <tr key={student.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">{student.id}</td>

                <td className="px-4 py-3">{student.firstName}</td>

                <td className="px-4 py-3">{student.lastName}</td>

                <td className="px-4 py-3">{student.email}</td>

                <td className="px-4 py-3">{student.age}</td>

                <td className="px-4 py-3">{student.grade}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
