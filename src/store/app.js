import { create } from "zustand";

const useStore = create((set) => ({
  active: "industria",
  data: [],
  categorias: {},
  updateActive: (active) => set(() => ({ active })),
  setData: (data) => set(() => ({ data })),
  setCategorias: (categorias) => set(() => ({ categorias })),
}));

export default useStore;
