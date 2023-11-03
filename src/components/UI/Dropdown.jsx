import React, { useRef, useState } from "react";
import useStore from "../../store/app";

import s from "./style.module.scss";
import preguntas from "../../data/preguntas";
import Icon from "../Icon";
import { useOnClickOutside } from "../../utils";

const Dropdown = () => {
  const ref = useRef(null);
  const optionsRef = useRef(null);
  const updateActive = useStore((state) => state.updateActive);
  const active = useStore((state) => state.active);
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const scroll = (scrollOffset) => {
    if (!optionsRef.current) return;
    optionsRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div
      className={s.horizontalDropdown}
      ref={ref}
      style={{
        width: open ? "100%" : "max-content",
        height: open ? "210px" : "max-content",
      }}
    >
      <div className={s.selected}>
        <div className={s.header}>
          <span>AGRUPAR POR</span>
          <button onClick={() => setOpen((state) => !state)} className={s.btn}>
            {open ? "CERRAR" : "CAMBIAR"}
          </button>
        </div>
        <p>{preguntas[active]}</p>
      </div>
      {open && (
        <div className={s.optionsWrapper}>
          <div className={s.header}>
            <Icon icon="arrow-left" onClick={() => scroll(-366 * 2)} />
            <Icon icon="arrow-right" onClick={() => scroll(366 * 2)} />
          </div>
          <div className={s.options} ref={optionsRef}>
            {Object.keys(preguntas)
              .filter((key) => key !== active)
              .map((key, i) => (
                <div
                  key={key}
                  className={s.option}
                  onClick={() => updateActive(key)}
                >
                  {preguntas[key]}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
