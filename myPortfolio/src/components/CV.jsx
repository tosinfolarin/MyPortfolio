import resume from '../images/CV.png'

import Navbar from "./Navbar";

const CV = () => {
    return (   
        <div>
            <Navbar/>
            <div className="CV">
                <img src={resume} alt="CV"/>
           </div>        
        </div>
        
    );
}

export default CV;