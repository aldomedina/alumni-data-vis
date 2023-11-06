import React from "react";

import s from "./style.module.scss";
import Dropdown from "./Dropdown";

const UI = ({ openModal }) => {
  return (
    <>
      <div className={s.logoWrapper}>
        <div className={s.logo} />
      </div>

      <div className={s.about} onClick={openModal}>
        <span>?</span>
      </div>

      <Dropdown />
      {/* <select
        value={active}
        style={{ position: "fixed", top: 0 }}
        onChange={(el) => updateActive(el.target.value)}
      >
        {Object.keys(keys).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select> */}
    </>
  );
};

export default UI;
