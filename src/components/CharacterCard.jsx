import { Link } from "react-router-dom";

function CharacterCard ({characterData}) {
    return (
    <li>
        <Link to={`/detail/${characterData.id}`} >
        <h4>{characterData.name}</h4>
        <p>{characterData.status}</p>
        <img src={characterData.image} alt={characterData.name}/>
    </Link>
        </li>)
}

export default CharacterCard