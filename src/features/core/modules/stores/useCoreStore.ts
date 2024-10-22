import { create } from "zustand";

type State = {
  isVisibleSidebar: boolean;
};

type Actions = {
  openSidebar: () => void;
  closeSidebar: () => void;
};

const initialState: State = {
  isVisibleSidebar: false,
};

const useCoreStore = create<State & Actions>()((set) => ({
  ...initialState,
  openSidebar: () => set((state) => ({ ...state, isVisibleSidebar: true })),
  closeSidebar: () => set((state) => ({ ...state, isVisibleSidebar: false })),
}));

export default useCoreStore;
