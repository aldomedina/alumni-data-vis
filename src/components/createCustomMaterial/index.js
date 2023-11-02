import { MeshStandardMaterial } from "three";
import fragmentShader from "./fragmentShader";

export default function createCustomMaterial() {
  const material = new MeshStandardMaterial({
    // roughness: 0.75,
    metalness: 0.9,
  });
  material.onBeforeCompile = function (shader) {
    shader.vertexShader =
      `
    varying vec2 vUv;
    attribute float postgrado;
    varying float vPostgrado;
    attribute float pregrado;
    varying float vPregrado;
  ` + shader.vertexShader;

    shader.vertexShader = shader.vertexShader.replace(
      "#include <uv_vertex>",
      `
        vUv = uv;
        vPostgrado = postgrado;
        vPregrado = pregrado;
    `
    );

    shader.fragmentShader =
      `
        varying float vPostgrado;
        varying float vPregrado;
        varying vec2 vUv;

    ` + shader.fragmentShader;

    shader.fragmentShader = shader.fragmentShader.replace(
      "vec4 diffuseColor = vec4( diffuse, opacity );",
      fragmentShader
    );
  };
  return material;
}
