import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateStudent />} />
      <Route path="/students/:id/edit" element={<EditStudent />} />
    </Routes>
  );
}

export default App;
