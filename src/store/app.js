import { create } from "zustand";

const useStore = create((set) => ({
  active: "nota",
  updateActive: (active) => set(() => ({ active })),
}));

export default useStore;
