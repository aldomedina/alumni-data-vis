import { create } from "zustand";
import data from "../data/data";

const useStore = create((set) => ({
  active: "industria",
  updateActive: (active) => set(() => ({ active })),
}));

export default useStore;
