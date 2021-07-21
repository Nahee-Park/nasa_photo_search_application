import { atom } from "recoil";
import { IItems } from "../types";

export const isSearchedAtom = atom({
  key: "isSearchedAtom",
  default: false,
});

export const keywordAtom = atom({
  key: "keywordAtom",
  default: "",
});

export const defaultDataAtom = atom({
  key: "defaultDataAtom",
  default: {} as IItems,
});

export const searchedDataAtom = atom({
  key: "searchedDataAtom",
  default: {} as any,
});
