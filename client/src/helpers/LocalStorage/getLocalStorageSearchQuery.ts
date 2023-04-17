export const getLocalStorageSearchQuery = (localStorageKey: string): string => {
  if (
    localStorage.getItem(localStorageKey) &&
    localStorage.getItem(localStorageKey) !== "new"
  ) {
    const data = JSON.parse(localStorage.getItem(localStorageKey) || "");
    return data;
  } else {
    return "all";
  }
};
