import { atom } from "recoil";

export const isSearchedAtom = atom({
  key: "isSearchedAtom",
  default: false,
});

export const keywordAtom = atom({
  key: "keywordAtom",
  default: "galaxy",
});

export const pageIndexAtom = atom({
  key: "pageIndexAtom",
  default: 0,
});
