import { atom } from 'recoil';

type CurrentThemeType = 'light' | 'dark';

export const currentThemeAtom = atom<CurrentThemeType>({
  key: 'currentThemeAtom',
  default: 'light',
});
