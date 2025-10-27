import Navbar from "./Navbar";
import Hobbies from "./Hobbies";

const HobbiesPage = () => {
    return (
      <div>
        <Navbar />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',  // centers horizontally
            padding: '2rem',
          }}
        >
          <div
            style={{
              width: '100%',       // optional: makes it responsive
              maxWidth: '800px',   // limits the width of Hobbies
            }}
          >
            <Hobbies />
          </div>
        </div>
      </div>
    );
  };
  
  export default HobbiesPage;
  