import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  inputType,
  handleFormSubmit,
  handleInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label="Enter a word or pharse"
          placeholder="Enter the word input here..."
          onChangeHandler={handleInputChange }
        />
      </div>
      <div>
        <Button
          onClickHandler={handleShowHideClick}
          text={inputType === "password" ? "Show" : "hide"}
          styleType="warning"
        />
      </div>
      <div>
        <Button type="submit" text="submit" styleType="Primary" />
      </div>
    </form>
  );
}
export default TextInputForm;
