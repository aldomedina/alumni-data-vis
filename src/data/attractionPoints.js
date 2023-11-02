import { Vector3 } from "three";
const nv3 = (x, y, z) => new Vector3(x, y, z);

const attractionPoints = {
  1: [nv3(0, 0, 0)],
  2: [
    nv3(-21, -2, 0), // Grupo 3
    nv3(21, -2, 0), // Grupo 5
  ],
  3: [
    nv3(0, 15, 0), // Grupo 1
    nv3(-20, -9, 0), // Grupo 3
    nv3(20, -9, 0), // Grupo 5
  ],
  4: [
    nv3(-20, -15, 0), // Grupo 3
    nv3(20, -15, 0), // Grupo 5
    nv3(-20, 15, 0), // Grupo 2
    nv3(20, 15, 0), // Grupo 6
  ],
  5: [
    nv3(17.5, -0.5, 0),
    nv3(6.88191, 16.9904, 0),
    nv3(-14.3819, 10.5388, 0),
    nv3(-14.3819, -11.0388, 0),
    nv3(6.88191, -16.4904, 0),
  ],
  6: [
    nv3(0, 17, 0), // Grupo 1
    nv3(-25, -8, 0), // Grupo 3
    nv3(25, -8, 0), // Grupo 5
    nv3(-25, 7, 0), // Grupo 2
    nv3(0, -18, 0), // Grupo 4
    nv3(25, 7, 0), // Grupo 6
  ],
  7: [
    nv3(17.5, -0.5, 0),
    nv3(8.5, 16.15388, 0),
    nv3(-8.5, 16.15388, 0),
    nv3(-17.5, -0.5, 0),
    nv3(-10.87591, -14.90324, 0),
    nv3(0, -17.5, 0),
    nv3(10.87591, -14.90324, 0),
  ],
  8: [
    nv3(17.5, -0.5, 0),
    nv3(12.36465, 12.02163, 0),
    nv3(0, 17.0, 0),
    nv3(-12.36465, 12.02163, 0),
    nv3(-17.5, -0.5, 0),
    nv3(-12.36465, -13.02163, 0),
    nv3(0, -18.0, 0),
    nv3(12.36465, -13.02163, 0),
  ],
  9: [
    nv3(17.5, -0.5, 0),
    nv3(13.94231, 11.80642, 0),
    nv3(4.81246, 17.20614, 0),
    nv3(-8.75, 15.2111, 0),
    nv3(-17.5, 8.66025, 0),
    nv3(-17.5, -8.66025, 0),
    nv3(-8.75, -15.2111, 0),
    nv3(4.81246, -17.20614, 0),
    nv3(13.94231, -11.80642, 0),
  ],
  10: [
    nv3(17.5, -0.5, 0),
    nv3(15.45085, 12.70146, 0),
    nv3(6.88191, 16.9904, 0),
    nv3(-6.88191, 16.9904, 0),
    nv3(-15.45085, 12.70146, 0),
    nv3(-17.5, -0.5, 0),
    nv3(-15.45085, -13.70146, 0),
    nv3(-6.88191, -17.9904, 0),
    nv3(6.88191, -17.9904, 0),
    nv3(15.45085, -13.70146, 0),
  ],
};

export const numericalAttractionPoint = [
  nv3(-30, -2, 0),
  nv3(-15, -2, 0),
  nv3(-0, -2, 0),
  nv3(15, -2, 0),
  nv3(30, -2, 0),
];

export default attractionPoints;
