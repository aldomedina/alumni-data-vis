import React from "react";
import { Html } from "@react-three/drei";
import { useShallow } from "zustand/react/shallow";

import useStore from "../store/app";
import categorias from "../data/categorias";

const Tags = () => {
  const { active } = useStore(
    useShallow((state) => ({
      active: state.active,
    }))
  );

  return (
    <>
      {categorias[active].map((el, i) => (
        <mesh key={`tag-${el.tag}`} position={el.point}>
          <Html distanceFactor={10}>
            <div className="tag">
              <div className="porc">{el.porc}</div>
              <div className="title">{el.tag}</div>
            </div>
          </Html>
        </mesh>
      ))}
    </>
  );
};

export default Tags;
