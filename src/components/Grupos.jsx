import * as THREE from "three";
import { useLayoutEffect } from "react";
import { InstancedUniformsMesh } from "three-instanced-uniforms-mesh";
import { useFrame, extend } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";

import useStore from "../store/app";
import createCustomMaterial from "./createCustomMaterial";
import categorias, { keys } from "../data/categorias";
import data from "../data/data";

const BALL_SIZE = 0.9;
const count = data.length;
const geometry = new THREE.SphereGeometry(BALL_SIZE, 16, 16);
const material = createCustomMaterial();
const material_2 = new THREE.MeshStandardMaterial({
  roughness: 0.7,
  color: "#4b4b4b",
});

const rfs = THREE.MathUtils.randFloatSpread;
extend({ InstancedUniformsMesh });

export default function Grupos({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const active = useStore((state) => state.active);

  const [ref, api] = useSphere(() => ({
    args: [BALL_SIZE],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(100), rfs(100), rfs(100)],
  }));

  useLayoutEffect(() => {
    if (ref.current && !!data.length) {
      const instancePregrado = new THREE.InstancedBufferAttribute(
        new Float32Array(count),
        1
      );
      const instancePostgrado = new THREE.InstancedBufferAttribute(
        new Float32Array(count),
        1
      );
      for (let i = 0; i < count; i++) {
        instancePostgrado.array[i] = keys.posgrado.findIndex(
          (el) => el === data[i]["posgrado"]
        );
        instancePregrado.array[i] = keys.pregrado.findIndex(
          (el) => el === data[i]["pregrado"]
        );
      }
      geometry.setAttribute("postgrado", instancePostgrado);
      geometry.setAttribute("pregrado", instancePregrado);
    }
  }, [ref]);

  useFrame(() => {
    for (let i = 0; i < data.length; i++) {
      const response = data[i][active];
      const attractionPoint = categorias[active].find(
        (el) => String(el.tag).toLowerCase() === String(response).toLowerCase()
      );

      ref.current.getMatrixAt(i, mat);
      const force = vec
        .setFromMatrixPosition(mat)
        .sub(attractionPoint.point)
        .normalize()
        .multiplyScalar(-40)
        .toArray();
      api.at(i).applyForce(force, [0, 0, 0]);
    }
  });

  return (
    <instancedUniformsMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[geometry, material, count]}
    />
  );
}
