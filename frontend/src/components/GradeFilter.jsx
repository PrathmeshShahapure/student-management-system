const GradeFilter = ({ grade, onGradeChange }) => {
  return (
    <select
      value={grade}
      onChange={(e) => onGradeChange(e.target.value)}
      className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
    >
      <option value="">All Grades</option>
      <option value="1">Grade 1</option>
      <option value="2">Grade 2</option>
      <option value="3">Grade 3</option>
      <option value="4">Grade 4</option>
      <option value="5">Grade 5</option>
    </select>
  );
};

export default GradeFilter;
    