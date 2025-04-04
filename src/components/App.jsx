import "../scss/App.scss";
import CharacterList from "./CharacterList"
import { useEffect, useState } from "react";
import Filter from "./Filters";
import {Routes, Route, useLocation, matchPath } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import CharacterCard from "./CharacterCard";
import getUsersFromAPI from "../services/getCharactersfromApi";

function App() {

    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState ("");

    useEffect(() => {
      getUsersFromAPI().then(usersCharacter => {
        setCharacters(usersCharacter);
        console.log(usersCharacter)
      });
      
    }, []);

    const onChangeName = (valueInput) => {
        console.log(valueInput);
        setFilterName(valueInput)
    }

    const filteredUsers = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName);
    })

    console.log(filteredUsers)
  
    return (
    <>
    <header>
        <h1>
            Rick and Morty
        </h1>
    </header>
    <main>
        <Routes>
        <Filter onChangeName={onChangeName}/>
        <CharacterList charactersData={filteredUsers} />
        </Routes>
    </main>
    </>
  )
}
  
  export default App;
