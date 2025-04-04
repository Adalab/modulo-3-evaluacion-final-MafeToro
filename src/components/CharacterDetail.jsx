import { useNavigate } from "react-router-dom";

function CharacterDetail({ character }) {
  const navigate = useNavigate();
  if (!character) {
    return <p>Personaje no encontrado o aún cargando...</p>;
  }

  return (
    <section>
      <h3>{character.name}</h3>
      <p>{character.status}</p>
      <img src={character.image} alt={character.name}/>

      <button onClick={() => navigate(-1)}>← Volver</button>
    </section>
  );
}

export default CharacterDetail;