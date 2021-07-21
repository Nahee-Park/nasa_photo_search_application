import { atom } from "recoil";

export const isSearched = atom({
  key: "isSearched",
  default: false,
});

export const defaultData = atom({
  key: "defaultData",
  default: null,
});

export const searchedData = atom({
  key: "searchedData",
  default: null,
});
