import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { degToRad } from "three/src/math/MathUtils";

import Pointer from "./Pointer";
import Grupos from "./Grupos";
import Tags from "./Tags";
import useStore from "../store/app";

const Scene = () => {
  const data = useStore((s) => s.data);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 80], fov: 35, near: 1, far: 1000 }}
    >
      {/* <ambientLight intensity={0.5} /> */}
      <OrbitControls
        enablePan={false}
        maxPolarAngle={degToRad(130)}
        minPolarAngle={degToRad(50)}
        maxAzimuthAngle={degToRad(50)}
        minAzimuthAngle={degToRad(-50)}
      />
      {/* <color attach="background" args={["#dfdfdf"]} /> */}
      <Environment files="/cyclorama_hard_light_2k.hdr" />
      <Tags />
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Grupos data={data} />
        <Pointer />
      </Physics>
    </Canvas>
  );
};

export default Scene;
