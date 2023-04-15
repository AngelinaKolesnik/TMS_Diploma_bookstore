import { IDefiniteBook } from "../../interfaces";

export const getLocalStorageBookInfo = (
  localStorageKey: string
): IDefiniteBook => {
  const data = JSON.parse(localStorage.getItem(localStorageKey) || "");
  return data;
};
