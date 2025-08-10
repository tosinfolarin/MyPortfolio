const Projects = () => {

    return(

    <div className="ProjectsContent">
        <br></br>
        <br></br>
    
 
            <h3 className="ProjectDescription">This is a physiotherapy website created using purely HTML and CSS and minimal use of JavaScript for the dropdowns. It was my first project</h3>
            <div className="ProjectImage">
                <img src="src/images/Physio4You.png" alt="Physio4You"/>
            </div>

            <h3 className="ProjectDescription">This is a driving school website which uses React, JSX</h3>
            <div className="ProjectImage"> 
                <img src="src/images/TrinityDriving.png" alt="TrinityDriving"/>
            </div>

            <h3 className="ProjectDescription">This is a physiotherapy website using React, JSX, Node.js, Express.Js</h3>
            <div className="ProjectImage"> 
                <img src="src/images/WaitlessPhysio.png" alt="WaitlessPhysio"/>
            </div>
        </div>
    )
}

export default Projects;