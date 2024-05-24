import { Link } from "react-router-dom";



const Navbar = () => {
    return (  
        
        <div className="navbar">
        <div className="links">
            <Link to="/">Home  </Link>
            <Link to="/about-me">About Me  </Link>
            <Link to="/projects">Projects  </Link>
            <Link to="/hobbies">Hobbies</Link>
        </div>
    </div>
        
    );
}


export default Navbar;