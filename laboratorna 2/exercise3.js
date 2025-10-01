// Вправа 3: Функції

// 1. Функція average - обчислює середнє арифметичне двох чисел
const average = (a, b) => {
  return (a + b) / 2;
};

// 2. Функція square - обчислює квадрат числа
const square = (x) => {
  return x * x;
};

// 3. Функція cube - обчислює куб числа
const cube = (x) => {
  return x * x * x;
};

// 4. Функція calculate - викликає square та cube у циклі від 0 до 9
// і передає результати в average, повертає масив результатів
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

// Експорт для тестування
export { average, square, cube, calculate };
