import information from './information.json';
import hobbyimage1 from '../images/hobbies1.png';
import hobbyimage2 from '../images/hobbies2.png';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <section className="hobbies-section">
      <div className="hobbies-content">
        <h2 className="hobbies-title">My Hobbies</h2>
        <p className="hobbies-description">{information.hobbies_explanation}</p>

        <div className="hobbies-images">
          <img src={hobbyimage1} alt="Playing Football" className="hobby-img" />
          <img src={hobbyimage2} alt="Football Signing" className="hobby-img" />
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
