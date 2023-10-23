import * as THREE from "three";
import { useLayoutEffect } from "react";
import { InstancedUniformsMesh } from "three-instanced-uniforms-mesh";
import { useFrame, extend } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";

import useStore from "../store/app";
import createCustomMaterial from "./createCustomMaterial";
import { postgrados, pregrados } from "../data/references";
import categorias from "../data/categorias";

const BALL_SIZE = 0.9;
const rfs = THREE.MathUtils.randFloatSpread;
const geometry = new THREE.SphereGeometry(BALL_SIZE, 16, 16);
const material = createCustomMaterial();

extend({ InstancedUniformsMesh });

export default function Grupos({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  data,
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
    if (ref.current) {
      const count = data.length;
      const instancePregrado = new THREE.InstancedBufferAttribute(
        new Float32Array(count),
        1
      );
      const instancePostgrado = new THREE.InstancedBufferAttribute(
        new Float32Array(count),
        1
      );

      for (let i = 0; i < count; i++) {
        const { postgrado, pregrado } = data[i];

        instancePostgrado.array[i] = postgrados.findIndex(
          (el) => el === postgrado
        );
        instancePregrado.array[i] = pregrados.findIndex(
          (el) => el === pregrado
        );
      }
      geometry.setAttribute("postgrado", instancePostgrado);
      geometry.setAttribute("pregrado", instancePregrado);
    }
  }, [data, ref]);

  useFrame(() => {
    for (let i = 0; i < data.length; i++) {
      const response = data[i][active];
      const attractionPoint = categorias[active].find(
        (el) => el.tag === response
      ).point;

      ref.current.getMatrixAt(i, mat);
      const force = vec
        .setFromMatrixPosition(mat)
        .sub(attractionPoint)
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
      args={[geometry, material, data.length]}
    />
  );
}
