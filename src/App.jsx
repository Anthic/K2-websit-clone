
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agents from "./Pages/Agents";
import Projects from "./Pages/Projects";


const App = () => {
 
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
