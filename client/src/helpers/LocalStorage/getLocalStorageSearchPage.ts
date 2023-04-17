export const getLocalStorageSearchPage = (localStorageKey: string): number => {
  if (localStorage.getItem(localStorageKey)) {
    const data = +JSON.parse(localStorage.getItem(localStorageKey) || "");
    return data;
  } else {
    return 1;
  }
};
