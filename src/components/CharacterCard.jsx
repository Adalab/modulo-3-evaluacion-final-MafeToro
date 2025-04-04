function CharacterCard ({characterData}) {
    return (
    <li>
        <h4>{characterData.name}</h4>
        <p>{characterData.status}</p>
        <img src={characterData.image} alt={characterData.name}/>
    
        </li>)
}

export default CharacterCard