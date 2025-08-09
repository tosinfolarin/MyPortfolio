import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage'
import CV from './components/CV'
import ProjectsPage from './components/ProjectsPage';
import HobbiesPage from './components/HobbiesPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cv" element={<CV/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/hobbies" element={<HobbiesPage/>} />
        
      </Routes>
    </Router>
  );
}


export default App;
