import information from './information.json';
import profilePic from '../images/ProfilePicture.png'
import Projects from './Projects'
import Hobbies from './Hobbies'

const MyInfo = () => {
  return (
    <div>
    <div className="my-info">
    <div
      className="myProfilePic"
      style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}
    >
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-lg shadow-xl"
        style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10%' }}
      />
    </div>


    <div className='myDescription'
      style={{
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      <h2>
        {information.greeting}
        <br /><br />
        {information.profile_summary}
      </h2>
    </div>

      <Projects/>
      <Hobbies/>
    </div>
    </div>
  );
}

export default MyInfo;