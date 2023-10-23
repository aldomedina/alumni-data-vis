import { random_int, random_choice } from "../utils";
import { postgrados, cargos, industrias, pregrados } from "../data/references";

const createRandomData = (length) =>
  Array.from({ length }, (_, i) => ({
    id: i + 1,
    cargo: random_choice(cargos),
    industria: random_choice(industrias),
    pregrado: random_choice(pregrados),
    postgrado: random_choice(postgrados),
    satisfaccion: random_int(1, 5),
    recomendaria: random_int(1, 5),
    competencias: random_int(1, 5),
    general: random_int(1, 5),
  }));

export default createRandomData;
