function Filter ({ onChangeName }) {
    const handleChangeName = (ev) => {
        
        onChangeName(ev.target.value);
    }

    return (
    <>
        <label htmlFor="name"> Nombre...</label>
        <input type="text" id="name" onChange={handleChangeName}/>
        </>
        );
}

export default Filter