import React, { useMemo } from "react";
import { Html } from "@react-three/drei";
import { useShallow } from "zustand/react/shallow";

import useStore from "../store/app";
import references from "../data/references";
import { calcularPorcentajes } from "../utils";
import categorias from "../data/categorias";

const Tags = () => {
  const { active, data } = useStore(
    useShallow((state) => ({
      active: state.active,
      data: state.data,
    }))
  );

  // TODO: UPDATE LOGIC
  const tags = useMemo(() => {
    return references[active].map((tag) => ({ tag }));
  }, [active]);

  const porcentajes = useMemo(() => {
    const all = data.map((el) => el[active]);
    const porcs = calcularPorcentajes(all);
    return porcs;
  }, [tags, data, active]);

  return (
    <>
      {categorias[active].map((el, i) => (
        <mesh key={`tag-${el.tag}`} position={el.point}>
          <Html distanceFactor={10}>
            <div className="tag">
              <div className="porc">{porcentajes[el.tag]}</div>
              <div className="title">{el.tag}</div>
            </div>
          </Html>
        </mesh>
      ))}
    </>
  );
};

export default Tags;
