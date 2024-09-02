import { useState } from "react";

const useAnchorEl = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return { anchorEl, handleMenuOpen, handleMenuClose };
};

export default useAnchorEl;
