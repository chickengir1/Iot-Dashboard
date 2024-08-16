import React, { forwardRef } from "react";
import InputUi from "./InputUi";

// 나중에 삭제 예정인 컴포넌트임

const InputContainer = forwardRef(({ id, label, placeholder, error }, ref) => (
  <InputUi
    id={id}
    label={label}
    placeholder={placeholder}
    error={error}
    ref={ref}
  />
));

InputContainer.displayName = "InputContainer";

export default InputContainer;
