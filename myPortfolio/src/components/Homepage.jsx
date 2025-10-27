import Navbar from "./Navbar"
import MyInfo from "./Home";

const Homepage = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Navbar />
        <MyInfo />
      </div>
    );
  };
  
  export default Homepage;
  