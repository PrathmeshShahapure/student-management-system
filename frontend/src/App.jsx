import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateStudent />} />
    </Routes>
  );
}

export default App;
