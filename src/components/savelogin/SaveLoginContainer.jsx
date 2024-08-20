import React from "react";
import SaveLoginUi from "./SaveLoginUi";

const SaveLoginContainer = ({ rememberLogin, setRememberLogin }) => {
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setRememberLogin(isChecked);

    localStorage.setItem("rememberLogin", JSON.stringify(isChecked));
  };

  return (
    <SaveLoginUi
      rememberLogin={rememberLogin}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export default SaveLoginContainer;
