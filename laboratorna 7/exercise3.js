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

console.log('=== Тестування функції unique() ===\n');

console.log('Тест 1: Видалення дублікатів чисел (з використанням Set)');
const result1 = unique([2, 1, 1, 3, 2]);
console.log('unique([2, 1, 1, 3, 2]) =', result1);
console.log('Очікується: [2, 1, 3]\n');

console.log('Тест 2: Видалення дублікатів рядків (з використанням Set)');
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log('unique(["top", "bottom", "top", "left"]) =', result2);
console.log('Очікується: ["top", "bottom", "left"]\n');

console.log('Тест 3: Масив без дублікатів');
const result3 = unique([1, 2, 3, 4, 5]);
console.log('unique([1, 2, 3, 4, 5]) =', result3);
console.log('Очікується: [1, 2, 3, 4, 5]\n');

console.log('Тест 4: Порожній масив');
const result4 = unique([]);
console.log('unique([]) =', result4);
console.log('Очікується: []\n');

console.log('Тест 5: Всі елементи однакові');
const result5 = unique([5, 5, 5, 5]);
console.log('unique([5, 5, 5, 5]) =', result5);
console.log('Очікується: [5]\n');

console.log('=== Альтернативна реалізація з filter ===\n');

console.log('Тест 6: uniqueFilter([2, 1, 1, 3, 2])');
const result6 = uniqueFilter([2, 1, 1, 3, 2]);
console.log('Результат:', result6);
console.log('Очікується: [2, 1, 3]\n');

console.log('Тест 7: uniqueFilter(["top", "bottom", "top", "left"])');
const result7 = uniqueFilter(['top', 'bottom', 'top', 'left']);
console.log('Результат:', result7);
console.log('Очікується: ["top", "bottom", "left"]\n');

console.log('=== Альтернативна реалізація з reduce ===\n');

console.log('Тест 8: uniqueReduce([2, 1, 1, 3, 2])');
const result8 = uniqueReduce([2, 1, 1, 3, 2]);
console.log('Результат:', result8);
console.log('Очікується: [2, 1, 3]\n');

console.log('Тест 9: uniqueReduce(["top", "bottom", "top", "left"])');
const result9 = uniqueReduce(['top', 'bottom', 'top', 'left']);
console.log('Результат:', result9);
console.log('Очікується: ["top", "bottom", "left"]\n');

console.log('=== Тест з різними типами даних ===\n');

console.log('Тест 10: Змішаний масив');
const result10 = unique([1, '1', 2, '2', 1, 2, '1']);
console.log('unique([1, "1", 2, "2", 1, 2, "1"]) =', result10);
console.log('Очікується: [1, "1", 2, "2"]');

