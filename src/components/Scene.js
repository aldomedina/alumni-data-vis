import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerformanceMonitor,
  AdaptiveDpr,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { degToRad } from "three/src/math/MathUtils";

import Pointer from "./Pointer";
import Grupos from "./Grupos";
import Tags from "./Tags";

const Scene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 80], fov: 35, near: 1, far: 1000 }}
    >
      <AdaptiveDpr pixelated />
      <Suspense fallback={<ambientLight intensity={0.5} />}>
        <Environment files="/cyclorama_hard_light_2k.hdr" />{" "}
      </Suspense>

      <OrbitControls
        enablePan={false}
        maxPolarAngle={degToRad(130)}
        minPolarAngle={degToRad(50)}
        maxAzimuthAngle={degToRad(50)}
        minAzimuthAngle={degToRad(-50)}
        minDistance={50}
        maxDistance={100}
      />

      <Tags />
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Grupos />
        <Pointer />
      </Physics>
    </Canvas>
  );
};

export default Scene;
