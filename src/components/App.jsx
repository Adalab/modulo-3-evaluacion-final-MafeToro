import "../scss/App.scss";
import CharacterList from "./CharacterList"
import { useEffect, useState } from "react";
import Filter from "./Filters";
import {Routes, Route} from "react-router-dom";
import getUsersFromAPI from "../services/getCharactersfromApi";
import CharacterDetailRoute from "./CharacterDetailRoute";

function App() {

    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState ("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      getUsersFromAPI().then(usersCharacter => {
        setCharacters(usersCharacter);
        //console.log(usersCharacter)
      });
      
    }, []);

    const onChangeName = (valueInput) => {
        //console.log(valueInput);
        setFilterName(valueInput);
        setErrorMessage(""); 
    }

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevenir el comportamiento por defecto (recargar la página)
      if (!filterName) {
        setErrorMessage("Por favor, ingresa un texto para buscar.");
      }
    };

    const filteredUsers = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName);
    })

    const noResultsMessage = filterName && filteredUsers.length === 0 ? (
      <p>No hay ningún personaje que coincida con la palabra "{filterName}".</p>
    ) : null;
  
    return (
    <>
    <header>
        <h1>
            Rick and Morty
        </h1>
    </header>
    <main>
    <Routes>
          <Route
            path="/"
            element={
            <>
              <form onSubmit={handleSubmit}>
                <Filter onChangeName={onChangeName} />
                </form>
                 {errorMessage && <p>{errorMessage}</p>}
                {noResultsMessage}
                <CharacterList charactersData={filteredUsers} />
                </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetailRoute characters={characters} />}
          />
        </Routes>
    </main>
    </>
  )
}
  
  export default App;
