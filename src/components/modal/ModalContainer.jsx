import ModalUi from "./ModalUi";

const ModalContainer = ({ open, onClose }) => {
  return <ModalUi open={open} onClose={onClose} />;
};

export default ModalContainer;
