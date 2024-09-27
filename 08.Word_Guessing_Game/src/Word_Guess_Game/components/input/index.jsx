import { useState } from 'react'
import './style.css'

function Input({onInput=()=>{}}={}){

    const[value,setValue]=useState("");

    function handleInput(e){
        onInput(e.target.value)
       setValue(e.target.value);
    }

    return(
        <input value={value} type='text' onInput={handleInput} />
    )
}
export default Input;