import { useEffect, useState } from "react";

import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { getStudents } from "../api/studentApi";
import StudentTable from "../components/StudentTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import GradeFilter from "../components/GradeFilter";
import { deleteStudent } from "../api/studentApi";

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

  const navigate = useNavigate();
 
  const handleEdit = (id) => {
    navigate(`/students/${id}/edit`);
  };    
  

 const handleDelete = async (id) => {
   const confirmed = window.confirm(
     "Are you sure you want to delete this student?",
   );

   if (!confirmed) {
     return;
   }

   try {
     await deleteStudent(id);
     await loadStudents();
     toast.success("Student deleted successfully!");
   } catch (err) {
     setError(err.response?.data?.message || "Something went wrong.");
      toast.error(err.response?.data?.message || "Something went wrong.");
   }
 };
  
  const handleView = (id) => {
    navigate(`/students/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Student Management System
      </h1>
      <p className="mb-6 text-xl text-gray-600 text-center">
        A complete Student Management System with full CRUD functionality,
        search, and pagination. <br/> Built to efficiently manage student records with
        a clean and intuitive interface.
      </p>
      <Link
        to="/create"
        className="flex justify-center w-50 mx-auto mb-8 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        <Plus size={18} />
        Create Student
      </Link>
      <div className=" flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <SearchBar search={search} onSearchChange={handleSearchChange} />
        </div>

        <div className="w-full md:w-56">
          <GradeFilter grade={grade} onGradeChange={handleGradeChange} />
        </div>
      </div>
      {loading ? (
        <h2 className="text-center mx-auto h-8 w-8 border-2 border-blue-400 border-t-0 animate-spin rounded-full "></h2>
      ) : error ? (
        <h2 className="text-center text-red-500">{error}</h2>
      ) : (
        <>
          <StudentTable
            students={students}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

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
