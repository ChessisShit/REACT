const Pet = (pet) => {
    pet = pet.pet;
    return (
        <div>
            <h1>Name: {pet.name.toString()}</h1>
            <h4>Type: {pet.type.toString()}</h4>
            <h4>Age: {pet.age.toString()}</h4>
            <h4>Alive: {pet.alive.toString()}</h4>
        </div>
    )
}

export default Pet;