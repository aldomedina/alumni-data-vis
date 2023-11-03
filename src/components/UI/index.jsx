import React from "react";

import s from "./style.module.scss";
import Dropdown from "./Dropdown";

const UI = () => {
  return (
    <>
      <div className={s.logoWrapper}>
        <div className={s.logo} />
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
