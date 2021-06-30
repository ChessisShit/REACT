import axios from 'axios';
import { useState, useEffect } from "react";

import DndMapper from './props/spell';

const Api = () => {

    const api = {"Spells":"http://www.dnd5eapi.co/api/spells", "Features":"http://www.dnd5eapi.co/api/features", "Monsters":"http://www.dnd5eapi.co/api/monsters","Classes":"http://www.dnd5eapi.co/api/classes"}
    const [spellz, setSpellz] = useState([]);

    const [loaded, setLoaded] = useState(false);

    const getData = (item) => {
            setTimeout( () => {

                axios.get(api[item]).then((res)=> {
                    setSpellz(res.data.results);
                    setLoaded(true);
                }).catch((err) => {setSpellz(err)});

            }, 3000)
            console.log(spellz)
            setLoaded(true);
    }

    const clicked = (e) =>{
        e.preventDefault();
        setLoaded(false);
        getData(e.target.type.value)
    }

    function renderer(){
        if (spellz instanceof Error) {
            return (<p> Oops, something has gone wrong! {spellz.message} </p>);
        }
        else if (!loaded){
            return (<p> Loading </p>);
        } else {
            return (
                <div>
                    {spellz.map((item) => (
                        <DndMapper url={item.url} name={item.name} index={item.index}/>
                    ))}
                </div>
            );
        }
    }

    return (
        <div>
            <form onSubmit={clicked}>
                <label for="type">Type:</label>
                <select id="type" name="type">
                <option value="Spells">Spells</option>
                <option value="Features">Features</option>
                <option value="Monsters">Monsters</option>
                <option value="Classes">Classes</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
            {renderer()}
        </div>
    );
}
 
export default Api;