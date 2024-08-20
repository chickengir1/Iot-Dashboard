import ModalUi from "./ModalUi";

const ModalContainer = ({ open, onClose, children }) => {
  return (
    <ModalUi open={open} onClose={onClose}>
      {children}
    </ModalUi>
  );
};

export default ModalContainer;
