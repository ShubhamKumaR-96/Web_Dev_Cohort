import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    function handleFormSubmit(e){
        e.preventDefault();
    }
    function handleInputChange(e){
        console.log(e.target.value);
    }

    return (
        <TextInputForm handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
    )
}
export default TextInputFormContainer;