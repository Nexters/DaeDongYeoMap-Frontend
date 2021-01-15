import { atom } from 'recoil';

export const sidebarState = atom({
  key: 'sidebarState',
  default: 'home',
});

export const spotGeneratorShowState = atom({
  key: 'spotGeneratorShowState',
  default: false,
});
