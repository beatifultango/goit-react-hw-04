import React from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ImageModal = ({ isOpen, onClose, imgSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel={altText}
        className={css.modal}
        // overlayClassName={css.overlay}
      >
        <div className={css.modalDiv}>
          <button onClick={onClose} className={css.modalButton}>
            x
          </button>
          <img src={imgSrc} alt={altText} className={css.modalImg} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
