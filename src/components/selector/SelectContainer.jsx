import SelectUi from "./SelectUi";

// 나중에 삭제할거임 이메일 셀렉터 대체

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
