const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by first name or last name."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
