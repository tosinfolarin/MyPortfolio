import information from './information.json';

const MyInfo = () => {
  return (
    <div className="my-info">
      {/* Profile picture */}
      <div className="myProfilePic">
        <img src="src/images/ProfilePicture.png" alt="Profile" />
      </div>

      {/* Description */}
      <div className="myDescription">
        <h3 className="name" aria-label="my name">
          {information.greeting}
          <br /><br />
          {information.profile_summary}
        </h3>
      </div>
    </div>
  );
}

export default MyInfo;