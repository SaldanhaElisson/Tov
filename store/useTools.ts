import { IprofileProps } from '@/types';
import { create } from 'zustand';

type State = IprofileProps;

type Action = {
  updateProfile: (
    name: IprofileProps['name'],
    avatar: IprofileProps['avatar']
  ) => void;
};

const useStores = create<State & Action>((set) => ({
  name: '',
  avatar: '',
  updateProfile: (name, avatar) => set(() => ({ name: name, avatar: avatar })),
}));

export default useStores;
