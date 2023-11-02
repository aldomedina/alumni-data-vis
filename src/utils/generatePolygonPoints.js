import { Vector3 } from "three";

export default function generatePolygonPoints(numSides, radius) {
  const points = [];
  for (let i = 0; i < numSides; i++) {
    const theta = ((2 * Math.PI) / numSides) * i;
    const x = radius * Math.cos(theta);
    // El -0.5 en la coordenada y es para alinear el polígono con el centro C(0, -0.5)
    const y = radius * Math.sin(theta) - 0.5;
    points.push(new Vector3(x.toFixed(5), y.toFixed(5), 0));
  }
  return points;
}
