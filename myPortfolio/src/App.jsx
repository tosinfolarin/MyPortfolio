import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage'
import AboutMePage from './components/AboutMePage'
import ProjectsPage from './components/ProjectsPage';
import HobbiesPage from './components/HobbiesPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/hobbies" element={<HobbiesPage/>} />
        
      </Routes>
    </Router>
  );
}


export default App;
