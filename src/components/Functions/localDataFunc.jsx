export let getLocalData = (key) => localStorage.getItem(key);
export let setLocalData = (key, value) => localStorage.setItem(key, value);
export let ParseLocalData = (key) => JSON.parse(getLocalData(key));
export let StringifyLocalData = (key, value) =>
  setLocalData(key, JSON.stringify(value));
