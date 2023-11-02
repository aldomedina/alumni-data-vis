import React from "react";
import useStore from "../../store/app";
import { keys } from "../../data/categorias";

const UI = () => {
  const updateActive = useStore((state) => state.updateActive);
  const active = useStore((state) => state.active);

  return (
    <>
      <select
        value={active}
        style={{ position: "fixed", top: 0 }}
        onChange={(el) => updateActive(el.target.value)}
      >
        {Object.keys(keys).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </>
  );
};

export default UI;
