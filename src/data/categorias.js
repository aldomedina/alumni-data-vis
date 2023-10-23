import attractionPoints from "./attractionPoints";

export const postgrados = ["mid", "mcd", "mie"];
export const pregrados = ["dis", "ingdis", "ingcom", "ingcivil"];
export const industrias = [
  "educacional",
  "estudiante",
  "emprendimiento",
  "desempleado",
  "freelance",
];
export const cargos = [
  "dueño/socio",
  "desempleado",
  "jefatura",
  "profesional",
  "freelance",
  "estudiante",
];

const todos = ["ALUMNI"];

// TODO: CREAR MAS SET DE ATTRACTION POINTS
const categorias = {
  todos: todos.map((el, i) => ({
    tag: el,
    point: attractionPoints[todos.length][i],
  })),
  pregrado: pregrados.map((el, i) => ({
    tag: el,
    point: attractionPoints[pregrados.length][i],
  })),
  postgrado: postgrados.map((el, i) => ({
    tag: el,
    point: attractionPoints[postgrados.length][i],
  })),
  industria: industrias.map((el, i) => ({
    tag: el,
    point: attractionPoints[industrias.length][i],
  })),
  cargo: cargos.map((el, i) => ({
    tag: el,
    point: attractionPoints[cargos.length][i],
  })),
};

export default categorias;
