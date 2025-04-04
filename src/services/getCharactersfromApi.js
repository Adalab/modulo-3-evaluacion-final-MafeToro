const getUsersFromAPI = () => {
return fetch ("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(data => {
    const parsedCharacters = data.results.map((character) => {
        return {
            name: character.name,
            image: character.image,
            status: character.status,
            id: character.id
        }
    })
    return parsedCharacters
})

}
export default getUsersFromAPI


