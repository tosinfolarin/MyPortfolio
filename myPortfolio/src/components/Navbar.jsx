import { Link } from "react-router-dom";
import linkedin from '../images/linkedin.png'
import github from '../images/Github.png'


const Navbar = () => {
    return (  
        
        <div className="navbar">
        <div className="links">
        <a
                href="https://www.linkedin.com/in/theo-osinfolarin-ldn"
                target="_blank"
                rel="noopener noreferrer"
                >
            <img className="linkedin w-12 h12 -mt-2 " src={linkedin} alt="linkedin"/>
        </a>
            <a
                href="https://github.com/tosinfolarin"
                target="_blank"
                rel="noopener noreferrer"
                ><img className="github w-8 h-8" src={github} alt="github"/>
                </a>
            <Link to="/">Home  </Link>
            <Link to="/projects">Projects  </Link>
            <Link to="/hobbies">Hobbies</Link> 
        </div>
    </div>

    );
}


export default Navbar;