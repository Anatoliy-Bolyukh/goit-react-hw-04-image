import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal')

const Modal = ({ openModal, imgUrl, imgTag }) => {

    const handleClose = event => {
        if (event.target === event.currentTarget) openModal();
    };

  return createPortal(
    <div className="overlay" onClick={handleClose}>
      <div className="modal">
        <img src={imgUrl} alt={imgTag} />
      </div>
      </div>,
      modalRoot
  );
};

Modal.propTypes = {
  openModal: PropTypes.func,
  imgUrl: PropTypes.string,
  imgTag: PropTypes.string,
};

export default Modal;
