// Вправа 2: Цикли

// 1. Функція range(start, end) - повертає масив чисел з діапазону [start, end]
const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

// 2. Функція rangeOdd(start, end) - повертає масив непарних чисел з діапазону [start, end]
const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
};

// Експорт для тестування
export { range, rangeOdd };
