function Filter ({ onChangeName }) {
    const handleChangeName = (ev) => {
        onChangeName(ev.target.value);
    }
    
    return (
    <form>
        <label htmlFor="name"> Nombre...</label>
        <input type="text" id="name" onChange={handleChangeName}/>
        </form>)
}

export default Filter