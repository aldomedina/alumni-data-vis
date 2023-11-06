import React, { useRef } from "react";
import s from "./style.module.scss";
import { useOnClickOutside } from "../../utils";

const Modal = ({ children, modalOpen, close }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, close);
  return (
    <>
      {modalOpen && (
        <div className={s.wrapper}>
          <div className={s.modal} ref={ref}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
