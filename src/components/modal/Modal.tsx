import React from "react";
import { ModalProps } from "../../utils/PropsUtils";

const Modal = (props: ModalProps) => {
  return (
    <>
      {props.openModal ? (
        <div className="modal-container" onClick={props.onClose}>
          <div className="modal-div">{props.children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
