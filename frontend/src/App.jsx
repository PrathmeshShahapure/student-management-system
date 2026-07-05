import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateStudent />} />
      <Route path="/students/:id/edit" element={<EditStudent />} />
      <Route path="/students/:id" element={<StudentDetails />} />
    </Routes>
  );
}

export default App;
