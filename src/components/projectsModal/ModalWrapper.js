import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { storeActions } from "../../store";
import { useState, useEffect } from "react";

// Modal
import PortfolioModal from "./PortfolioModal";

const ModalWrapper = ({ data, theme }) => {
  // modal component state
  const [modalComponent, setModalComponent] = useState(null);

  // get modal state from redux store
  const modalIsOpen = useSelector((state) => state.modal.isOpen);
  const modalName = useSelector((state) => state.modal.modalName);
  const modalActions = storeActions.modal;

  // dispatch modal actions
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalActions.modalClose());
  };

  // render modal component based on modalName
  useEffect(() => {
    const project = data.find((project) => project.name === modalName);
    switch (modalName) {
      case data[0].name:
        setModalComponent(<PortfolioModal project={project} theme={theme} />);
        break;
      default:
        setModalComponent(null);
    }
  }, [modalName, theme]);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {modalComponent}
    </Modal>
  );
};

export default ModalWrapper;
