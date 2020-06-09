export function getValuesForOptions(items, value, additional = []) {
  return [...additional, ...new Set(items.map((item) => item[value]))];
}
