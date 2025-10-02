const average = (a, b) => {
  return (a + b) / 2;
};

const square = (x) => {
  return x * x;
};

const cube = (x) => {
  return x * x * x;
};

const calculate = () => {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const squareValue = square(i);
    const cubeValue = cube(i);
    const avg = average(squareValue, cubeValue);
    results.push(avg);
  }
  return results;
};

export { average, square, cube, calculate };
