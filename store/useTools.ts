import { create } from 'zustand';

type State = {
  pencil: boolean;
  mousePatter: boolean;
};

type Action = {
  updateGetCord: () => void;
  updateMousePatter: () => void;
};

const UseTools = create<State & Action>((set) => ({
  pencil: false,
  mousePatter: true,
  updateGetCord: () => set(() => ({ pencil: true, mousePatter: false })),
  updateMousePatter: () => set(() => ({ pencil: false, mousePatter: true })),
}));

export default UseTools;
