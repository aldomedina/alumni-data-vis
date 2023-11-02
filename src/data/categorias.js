import { frecuenciaPorcentual } from "../utils";
import attractionPoints, { numericalAttractionPoint } from "./attractionPoints";
import data from "./data";

const categorias = {};

export const keys = {
  ingreso: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
  pregrado: [
    "Ingeniería Comercial",
    "Ingeniería Civil",
    "Diseño",
    "Ingeniería en Diseño",
    "Ingeniería en Diseño - Ingeniería Comercial",
    "otro",
  ],
  posgrado: [
    "Magíster en Innovación y Diseño",
    "Magíster en Diseño",
    "Magíster en Ciencias del Diseño",
    "Magíster Innovación y Emprendimiento",
  ],
  genero: ["M", "F"],
  industria: [
    "Empresa / Organización (sector privado)",
    "Sector Educacional",
    "Sector Social / Comunitario",
    "Emprendimiento",
    "Otro",
    "Freelancer",
    "ONG / Fundaciones",
    "Desempleado",
    "Sector Público",
  ],
  cargo: [
    "Dueño / Socio",
    "Gerencia / Alta Dirección",
    "Jefatura",
    "Profesional (sin personal a cargo)",
    "Subgerencia",
    "Otro",
    "Desempleado",
  ],
  satisfaccion: [1, 2, 3, 4, 5],
  competencias: [1, 2, 3, 4, 5],
  nota: [1, 2, 3, 4, 5],
  recomendaria: [1, 2, 3, 4, 5],
};

const numericalCategories = [
  "satisfaccion",
  "competencias",
  "nota",
  "recomendaria",
];

for (let key in keys) {
  categorias[key] = keys[key].map((el, i) => {
    const all = data.map((el) => el[key]);
    const point = numericalCategories.includes(key)
      ? numericalAttractionPoint[i]
      : attractionPoints[keys[key].length][i];

    return {
      tag: el,
      point,
      porc: frecuenciaPorcentual(all, el),
    };
  });
}

export default categorias;
