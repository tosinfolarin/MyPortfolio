import information from './information.json';
import profilePic from '../images/ProfilePicture.png';
import Projects from './Projects';
import Hobbies from './Hobbies';

const MyInfo = () => {
  return (
    <div
      className="my-info"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '5rem 0',
        width: '100%',
      }}
    >
      <div
        className="profile-section"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}
      >
        <div className="myProfilePic">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-lg shadow-xl"
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            }}
          />
        </div>

        <div
          className="myDescription"
          style={{
            maxWidth: '600px',
            textAlign: 'left', // keep text readable beside image
          }}
        >
          <h2
            style={{
              color: '#000000',
              fontSize: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            {information.greeting}
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {information.profile_summary}
          </p>
        </div>
      </div>

      <Projects />
      <Hobbies />
    </div>
  );
};

export default MyInfo;
