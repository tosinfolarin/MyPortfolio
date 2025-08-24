import information from './information.json';
import hobbyimage1 from '../images/hobbies1.png'
import hobbyimage2 from '../images/hobbies2.png'

const Hobbies = () => {

    return (

    <div className="HobbyContent">
        <br></br>
        <br></br>
        <h3 className='HobbyDescription'>{information.hobbies_explanation}</h3>
            <h3 className="ProjectDescription">Image after signing for Herne Bay Football Club </h3>
            <div className="HobbyImage"> 
                <img src={hobbyimage2} alt="FootballSigning"/>
            </div>

            <h3 className="ProjectDescription">Image playing with Herne Bay Football Club </h3>
            <div className="HobbyImage"> 
                <img src={hobbyimage1} alt="PlayingFootball"/>
            </div>
        </div>
    )
}

export default Hobbies;