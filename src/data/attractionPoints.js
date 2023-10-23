import { Vector3 } from "three";
const nv3 = (x, y, z) => new Vector3(x, y, z);
const attractionPoints = {
  1: [nv3(0, 0, 0)],
  2: [
    nv3(-25, -2, 0), // Grupo 3
    nv3(25, -2, 0), // Grupo 5
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
};

export default attractionPoints;
