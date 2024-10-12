import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const navigate=useNavigate();
    const[inputType,setInputType]=useState("password");
    const[value,setValue]=useState("");

    function handleFormSubmit(e){
        e.preventDefault();
        console.log("form submitted" , value)
        if(value){
            navigate('/play',{state:{wordSelected:value}})
        }
    }
    function handleInputChange(e){
        console.log("Text input changed")
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleShowHideClick(){
        console.log("Show / hide clicked")
        if(inputType=="text"){
            setInputType("password")
        }else {
            setInputType("text")
        }
    }

    return (
        <TextInputForm inputType={inputType} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} handleShowHideClick={handleShowHideClick}  />
    )
}
export default TextInputFormContainer;