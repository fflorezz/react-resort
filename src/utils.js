export const dateFormater = (date) => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDay() + 1 < 10 ? "0" + date.getDay() : date.getDay()}`;
};
