import physioWebsitePic from '../images/Physio4You.png'
import DrivingWebsitePic from '../images/TrinityDriving.png'
import ReactPhysioWebsitePic from '../images/WaitlessPhysio.png'

const Projects = () => {

    return(

    <div className="ProjectsContent">
        <br></br>
        <br></br>
    
            <h3 className="ProjectDescriptionOne">  <strong>CLICK THE IMAGE TO VISIT THE WEBSITE! </strong><br/>This is a driving school website which uses React.js , Node.js and JSX syntax</h3>
            <div className="ProjectImage"> 
            <a 
                href="https://trinitydrivingschool.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={DrivingWebsitePic} alt="TrinityDriving"/>
            </a>
            </div>

            <h3 className="ProjectDescription"> <strong>CLICK THE IMAGE TO VISIT THE WEBSITE! </strong> <br/>This is a physiotherapy website using React.js, JSX, Node.js and Express.Js</h3>
            <div className="ProjectImage">
            <a 
                href="https://physioapp-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
            > 
                <img src={ReactPhysioWebsitePic} alt="WaitlessPhysio"/>
            </a>
            </div>

            <h3 className="ProjectDescription">  <strong>CLICK THE IMAGE TO VISIT THE WEBSITE! </strong> <br/>This is a physiotherapy website created using purely HTML and CSS and minimal use of JavaScript for the dropdowns. It was my first project</h3>
            
            <div className="ProjectImage">
            <a 
                href="https://tosinfolarin.github.io/Physio4You/" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={physioWebsitePic} alt="Physio4You" />
            </a>
            </div>
            
      
        </div>
    )
}

export default Projects;