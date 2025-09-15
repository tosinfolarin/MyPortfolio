import information from './information.json';
import profilePic from '../images/ProfilePicture.png'
import Projects from './Projects'
import Hobbies from './Hobbies'
import CV from './CV';

const MyInfo = () => {
  return (
    <div>
    <div className="my-info">
      <div className="myProfilePic">
        <img src={profilePic} alt="Profile" />
      </div>

      <div className="myDescription">
        <h3 className="name" aria-label="my name">
          {information.greeting}
          <br /><br />
          {information.profile_summary}
        </h3>
      </div>
      <Projects/>
      <Hobbies/>
    </div>
    </div>
  );
}

export default MyInfo;