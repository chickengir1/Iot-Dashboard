import { useDispatch, useSelector } from "react-redux";
import ModalUi from "./ModalUi";
import { closeModal } from "../../redux/actions/modalAction";

const ModalContainer = ({ children }) => {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.modal.openModal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <ModalUi open={!!openModal} onClose={handleClose}>
      {children}
    </ModalUi>
  );
};

export default ModalContainer;
