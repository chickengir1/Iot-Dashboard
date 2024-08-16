import SelectUi from "./SelectUi";

const SelectContainer = ({ id, label, placeholder, error, selectValue }) => (
  <SelectUi
    id={id}
    label={label}
    placeholder={placeholder}
    error={error}
    selectValue={selectValue}
  />
);

export default SelectContainer;
