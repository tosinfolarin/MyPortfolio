import physioWebsitePic from '../images/Physio4You.png';
import DrivingWebsitePic from '../images/TrinityDriving.png';
import ReactPhysioWebsitePic from '../images/WaitlessPhysio.png';
import './Projects.css';

const projects = [
  {
    title: "Driving School App",
    description:
      "A driving school website built with React.js, Node.js, and JSX syntax.",
    img: DrivingWebsitePic,
    link: "https://trinitydrivingschool.netlify.app/",
  },
  {
    title: "Physiotherapy App",
    description:
      "A physiotherapy web app created using React.js, JSX, Node.js, and Express.js.",
    img: ReactPhysioWebsitePic,
    link: "https://physioapp-frontend.onrender.com/",
  },
  {
    title: "First HTML and CSS Project",
    description:
      "A simple physiotherapy website built using pure HTML and CSS with light JavaScript for dropdowns — my very first project.",
    img: physioWebsitePic,
    link: "https://tosinfolarin.github.io/Physio4You/",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <img
                src={project.img}
                alt={project.title}
                className="project-image"
              />
            </a>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
