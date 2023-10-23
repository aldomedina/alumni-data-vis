import React from "react";
import useStore from "../../store/app";

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
        <option value={"todos"}>todos</option>
        <option value={"pregrado"}>pregrado</option>
        <option value={"postgrado"}>postgrado</option>
        <option value={"industria"}>industria</option>
        <option value={"cargo"}>cargo</option>
      </select>
    </>
  );
};

export default UI;
