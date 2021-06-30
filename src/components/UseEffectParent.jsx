import UseEffect from "./UseEffect";
import { useState } from "react";

const UseEffectParent = () => {

    const [form, setForm] = useState({});
    
    form.text1 = "";
    form.text2 = "";

    return ( 
        <div>
            <UseEffect form={form} setForm={setForm}/>
            <h1> {form.text1}, {form.text2} </h1>
        </div>
    );
}
 
export default UseEffectParent;