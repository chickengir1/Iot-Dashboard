import React from "react";
import FooterLinksUi from "./FooterLinksUi";
import { useNavigate } from "react-router-dom";

const FooterLinksContainer = ({ text1, link1, text2, link2 }) => {
  const navigate = useNavigate();

  const handleLink1Click = () => {
    navigate(link1);
  };

  const handleLink2Click = () => {
    navigate(link2);
  };

  return (
    <FooterLinksUi
      text1={text1}
      onLink1Click={handleLink1Click}
      text2={text2}
      onLink2Click={handleLink2Click}
    />
  );
};

export default FooterLinksContainer;
