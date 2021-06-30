import axios from 'axios';
import { useState, useEffect } from "react";

import Spell from './props/spell';

const Api = () => {

    const [spellz, setSpellz] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData();
    });

    const getData = () => {
            setTimeout( () => {

                axios.get("http://www.dnd5eapi.co/api/spells").then((res)=> {
                    setSpellz(res.data.results);
                    setLoaded(true);
                }).catch((err) => {setSpellz(err)});

            }, 3000)
            console.log(spellz)
            setLoaded(true);
    }

    
    if (spellz instanceof Error) {
        return (<p> Oops, something has gone wrong! {spellz.message} </p>);
    }
    else if (!loaded){
        return (<p> Loading </p>);
    } else {
        return (
            <div>
                {spellz.map((spell) => (
                    <Spell url={spell.url} name={spell.name} index={spell.index}/>
                ))}
            </div>
        );
    }
}
 
export default Api;