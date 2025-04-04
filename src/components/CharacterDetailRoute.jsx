import { useParams } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function CharacterDetailRoute({ characters }) {
  const { id } = useParams(); 
  const character = characters.find((char) => char.id === Number(id));

  if (!character) {
    return <p>Personaje no encontrado</p>;
  }

  return <CharacterDetail character={character} />;
}

export default CharacterDetailRoute;