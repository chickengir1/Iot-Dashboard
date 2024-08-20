import React from "react";
import { useFormContext } from "react-hook-form";
import EmailSelectorUI from "./EmailSelectorUI";
import { emailDomains } from "../../utils/formFields";

const EmailSelectorContainer = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const email = watch("email", "");
  const domain = watch("domain", emailDomains[0]);

  const handleEmailChange = (e) => {
    setValue("email", e.target.value);
  };

  const handleDomainChange = (e) => {
    setValue("domain", e.target.value);
  };

  return (
    <EmailSelectorUI
      email={email}
      domain={domain}
      onEmailChange={handleEmailChange}
      onDomainChange={handleDomainChange}
      emailDomains={emailDomains}
      errors={errors}
      register={register}
    />
  );
};

export default EmailSelectorContainer;
