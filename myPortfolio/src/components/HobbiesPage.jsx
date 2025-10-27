import Navbar from "./Navbar";
import Hobbies from "./Hobbies";

const HobbiesPage = () => {
    return (
      <div>
        <Navbar />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', 
            padding: '2rem',
          }}
        >
          <div
            style={{
              width: '100%',    
              maxWidth: '800px',  
            }}
          >
            <Hobbies />
          </div>
        </div>
      </div>
    );
  };
  
  export default HobbiesPage;
  