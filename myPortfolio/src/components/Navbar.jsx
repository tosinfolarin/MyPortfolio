import { Link } from "react-router-dom";
import linkedin from '../images/linkedin.png'


const Navbar = () => {
    return (  
        
        <div className="navbar">
        <div className="links">
            <img className="linkedin w-8 h8" src={linkedin} alt="linkedin"/>
            <Link to="/">Home  </Link>
            <Link to="/cv">CV  </Link>
            <Link to="/projects">Projects  </Link>
            <Link to="/hobbies">Hobbies</Link>
        </div>
    </div>

    );
}


export default Navbar;