export const range = (floor: number, ceiling: number) => {
  const array = [];
  while (floor <= ceiling) {
    array.push(floor++);
  }
  return array;
};
