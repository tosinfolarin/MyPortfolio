import information from './information.json';

const Hobbies = () => {

    return (

    <div className="HobbyContent">
        <br></br>
        <br></br>
        <h3 className='HobbyDescription'>{information.hobbies_explanation}</h3>
            <h3 className="ProjectDescription">Image after signing for Herne Bay Football Club </h3>
            <div className="HobbyImage"> 
                <img src="/src/images/hobbies2.png" alt="FootballSigning"/>
            </div>

            <h3 className="ProjectDescription">Image playing with Herne Bay Football Club </h3>
            <div className="HobbyImage"> 
                <img src="/src/images/hobbies1.png" alt="PlayingFootball"/>
            </div>
        </div>
    )
}

export default Hobbies;