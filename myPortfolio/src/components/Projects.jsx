const Projects = () => {

    return(

    <div className="ProjectsContent">
        <br></br>
        <br></br>
    
        
            <h3 className="ProjectDescriptionOne">This is a physiotherapy website created using purely HTML and CSS and minimal use of JavaScript for the dropdowns. It was my first project</h3>
            <div className="ProjectImage">
            <a 
                href="https://tosinfolarin.github.io/Physio4You/" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/images/Physio4You.png" alt="Physio4You" />
            </a>
            </div>
            
            <h3 className="ProjectDescription">This is a driving school website which uses React, JSX</h3>
            <div className="ProjectImage"> 
            <a 
                href="https://trinitydrivingschool.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="src/images/TrinityDriving.png" alt="TrinityDriving"/>
            </a>
            </div>

            <h3 className="ProjectDescription">This is a physiotherapy website using React, JSX, Node.js, Express.Js</h3>
            <div className="ProjectImage">
            <a 
                href="https://physioapp-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
            > 
                <img src="src/images/WaitlessPhysio.png" alt="WaitlessPhysio"/>
            </a>
            </div>
        </div>
    )
}

export default Projects;