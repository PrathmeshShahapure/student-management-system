import { useEffect, useState } from "react";
import { getStudents } from "../api/studentApi";
import StudentTable from "../components/StudentTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import GradeFilter from "../components/GradeFilter";

const Home = () => {
  // Student data
  const [students, setStudents] = useState([]);

  // User controlled state
  const [page, setPage] = useState(1);
  const [limit] = useState(5);


  // Server metadata
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });

  // UI state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //Searching states
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleSearchChange = (value) => {
    setPage(1);
    setSearch(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  //grade filter state
  const [grade, setGrade] = useState("");
  
  const handleGradeChange = (value) => {
    setPage(1);
    setGrade(value);
  };

  const loadStudents = async () => {
    try {
      setError("");

      const response = await getStudents({
        page,
        limit,
        search: debouncedSearch,
        grade,
      });

      setStudents(response.data.students);
      setPagination(response.data.pagination);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, [page, limit, debouncedSearch, grade]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.totalPages || newPage === page) {
      return;
    }

    setLoading(true);
    setPage(newPage);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Student Management System</h1>

      {loading ? (
        <h2 className="text-center text-lg">Loading...</h2>
      ) : error ? (
        <h2 className="text-center text-red-500">{error}</h2>
      ) : (
        <>
          <SearchBar search={search} onSearchChange={handleSearchChange} />
          <GradeFilter grade={grade} onGradeChange={handleGradeChange} />
          <StudentTable students={students} />

          <Pagination
            currentPage={page}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
