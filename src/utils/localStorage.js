export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const remove = (key) => {
  localStorage.removeItem(key);
};
