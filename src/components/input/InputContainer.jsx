import InputUi from "./InputUi";

const InputContainer = ({ id, label, placeholder, error }) => (
  <InputUi id={id} label={label} placeholder={placeholder} error={error} />
);

export default InputContainer;
