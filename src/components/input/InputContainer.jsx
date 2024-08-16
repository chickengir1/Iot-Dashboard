import React, { forwardRef } from "react";
import InputUi from "./InputUi";

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
