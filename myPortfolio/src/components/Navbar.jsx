import { Link } from "react-router-dom";



const Navbar = () => {
    return (  
            
            <div className="links">
                <Link to= "/">Home</Link>
                <Link to= "/about-me">About Me</Link>
                <Link to= "/projects">Projects</Link>
                <Link to= "/hobbies">Hobbies</Link>
            
            </div>
        
    );
}


export default Navbar;