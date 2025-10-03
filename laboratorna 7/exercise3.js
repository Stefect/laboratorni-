function unique(array) {
  return [...new Set(array)];
}

function uniqueFilter(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

function uniqueReduce(array) {
  return array.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log('=== Тестирование функции unique() ===\n');

console.log('Тест 1: Удаление дубликатов чисел (с использованием Set)');
const result1 = unique([2, 1, 1, 3, 2]);
console.log('unique([2, 1, 1, 3, 2]) =', result1);
console.log('Ожидается: [2, 1, 3]\n');

console.log('Тест 2: Удаление дубликатов строк (с использованием Set)');
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log('unique(["top", "bottom", "top", "left"]) =', result2);
console.log('Ожидается: ["top", "bottom", "left"]\n');

console.log('Тест 3: Массив без дубликатов');
const result3 = unique([1, 2, 3, 4, 5]);
console.log('unique([1, 2, 3, 4, 5]) =', result3);
console.log('Ожидается: [1, 2, 3, 4, 5]\n');

console.log('Тест 4: Пустой массив');
const result4 = unique([]);
console.log('unique([]) =', result4);
console.log('Ожидается: []\n');

console.log('Тест 5: Все элементы одинаковые');
const result5 = unique([5, 5, 5, 5]);
console.log('unique([5, 5, 5, 5]) =', result5);
console.log('Ожидается: [5]\n');

console.log('=== Альтернативная реализация с filter ===\n');

console.log('Тест 6: uniqueFilter([2, 1, 1, 3, 2])');
const result6 = uniqueFilter([2, 1, 1, 3, 2]);
console.log('Результат:', result6);
console.log('Ожидается: [2, 1, 3]\n');

console.log('Тест 7: uniqueFilter(["top", "bottom", "top", "left"])');
const result7 = uniqueFilter(['top', 'bottom', 'top', 'left']);
console.log('Результат:', result7);
console.log('Ожидается: ["top", "bottom", "left"]\n');

console.log('=== Альтернативная реализация с reduce ===\n');

console.log('Тест 8: uniqueReduce([2, 1, 1, 3, 2])');
const result8 = uniqueReduce([2, 1, 1, 3, 2]);
console.log('Результат:', result8);
console.log('Ожидается: [2, 1, 3]\n');

console.log('Тест 9: uniqueReduce(["top", "bottom", "top", "left"])');
const result9 = uniqueReduce(['top', 'bottom', 'top', 'left']);
console.log('Результат:', result9);
console.log('Ожидается: ["top", "bottom", "left"]\n');

console.log('=== Тест с разными типами данных ===\n');

console.log('Тест 10: Смешанный массив');
const result10 = unique([1, '1', 2, '2', 1, 2, '1']);
console.log('unique([1, "1", 2, "2", 1, 2, "1"]) =', result10);
console.log('Ожидается: [1, "1", 2, "2"]');

