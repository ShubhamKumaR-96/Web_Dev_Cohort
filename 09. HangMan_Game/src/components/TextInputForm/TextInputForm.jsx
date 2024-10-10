import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import TextInputFormContainer from "./TextInputFormContainer";

function TextInputForm({handleFormSubmit,handleTextInputChange}){
    return (
        <form onSubmit={handleFormSubmit}>
          <div>
          <TextInput type="Enter a word or pharse" placeholder="Enter the word input here..." onChangeHandler={handleTextInputChange} />
          </div>
          <div>
            <Button text="show / Hide" styleType="warning" />
          </div>
          <div>
            <Button type="submit" text="submit" styleType="Primary" />
          </div>
        </form>
    )
}
export default TextInputForm;