import { useState } from "react";


const UseEffect = ({form, setForm}) => { 

    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const onChange = (e) =>{
        const newData = {text1:e.text1,text2:e.text2};
        setForm(newData);
    }

    return ( 
        <div>
            <form onSubmit="handleSubmit">
                <label htmlFor="text1"> Text 1</label>
                <input type="text" name="text1" onChange={onChange} value={form.text1}/><br/>
                <label htmlFor="text2"> Text 2</label>
                <input type="text" name="text2" onChange={onChange} value={form.text2} /><br/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}
 
export default UseEffect;