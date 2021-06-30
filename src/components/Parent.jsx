import { useState } from "react";
import Pet from "./props/Pet";

const Parent = () => {

    const [petList, setPetList] = useState([]);

    const addPet = (e) => {
        e.preventDefault();
        const newPet = {name:e.target.name.value, age:e.target.age.value, type:e.target.type.value, alive:e.target.alive.value};
        setPetList(petList => [...petList, newPet]);
    }

    return(
        <div>
            <h1>Pet List</h1>
            <form onSubmit={addPet}>
                <label for="name">Name:</label>
                <input type="text" name="name"/>
                <br/>
                <label for="name">Type:</label>
                <input type="text" name="type"/>
                <br/>
                <label for="name">Age:</label>
                <input type="number" name="age"/>
                <br/>
                <label for="name">Alive:</label>
                <input type="text" name="alive"/>
                <br/>
                <button type="submit">Create</button>
            </form>
            {petList.map((x) => <Pet pet={x}/> )}
        </div>
    )

}

export default Parent;