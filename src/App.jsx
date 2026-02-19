import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Agents from './Pages/Agents';
import Projects from './Pages/Projects';
import Navbar from './components/Navigation/Navbar';
import FullScreenNav from './components/Navigation/FullScreenNav';
import Blog from './Pages/Blog';

const App = () => {
  return (
    <div>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
