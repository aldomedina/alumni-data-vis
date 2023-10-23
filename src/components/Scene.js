import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerformanceMonitor,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { degToRad } from "three/src/math/MathUtils";

import Pointer from "./Pointer";
import Grupos from "./Grupos";
import Tags from "./Tags";
import useStore from "../store/app";
import { Suspense, useState } from "react";

const Scene = () => {
  const data = useStore((s) => s.data);
  const [isHighPerf, setIsHighPerf] = useState(true);

  return (
    <Canvas
      shadows
      dpr={isHighPerf ? 2 : 1}
      camera={{ position: [0, 0, 80], fov: 35, near: 1, far: 1000 }}
    >
      <PerformanceMonitor
        onIncline={() => {
          console.log("high perf");
          setIsHighPerf(true);
        }}
        onDecline={() => {
          console.log("low perf");
          setIsHighPerf(false);
        }}
      />
      {isHighPerf ? (
        <Suspense fallback={<ambientLight intensity={0.5} />}>
          <Environment files="/cyclorama_hard_light_2k.hdr" />{" "}
        </Suspense>
      ) : (
        <>
          <directionalLight position={[0, 5, 40]} intensity={2} />
          <ambientLight intensity={1} />
        </>
      )}

      <OrbitControls
        enablePan={false}
        maxPolarAngle={degToRad(130)}
        minPolarAngle={degToRad(50)}
        maxAzimuthAngle={degToRad(50)}
        minAzimuthAngle={degToRad(-50)}
      />
      <Tags />
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Grupos data={data} isHighPerf={isHighPerf} />
        <Pointer />
      </Physics>
    </Canvas>
  );
};

export default Scene;
