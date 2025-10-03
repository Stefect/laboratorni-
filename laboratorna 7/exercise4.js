function difference(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}

function differenceSet(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
}

function differenceReduce(array1, array2) {
  return array1.reduce((acc, item) => {
    if (!array2.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log('=== Тестирование функции difference() ===\n');

console.log('Тест 1: Разность числовых массивов');
const array1a = [7, -2, 10, 5, 0];
const array2a = [0, 10];
const result1 = difference(array1a, array2a);
console.log('array1:', array1a);
console.log('array2:', array2a);
console.log('difference(array1, array2) =', result1);
console.log('Ожидается: [7, -2, 5]\n');

console.log('Тест 2: Разность строковых массивов');
const array1b = ['Beijing', 'Kiev'];
const array2b = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array1b, array2b);
console.log('array1:', array1b);
console.log('array2:', array2b);
console.log('difference(array1, array2) =', result2);
console.log('Ожидается: ["Beijing"]\n');

console.log('Тест 3: Нет общих элементов');
const result3 = difference([1, 2, 3], [4, 5, 6]);
console.log('difference([1, 2, 3], [4, 5, 6]) =', result3);
console.log('Ожидается: [1, 2, 3]\n');

console.log('Тест 4: Все элементы общие');
const result4 = difference([1, 2, 3], [1, 2, 3]);
console.log('difference([1, 2, 3], [1, 2, 3]) =', result4);
console.log('Ожидается: []\n');

console.log('Тест 5: Первый массив пустой');
const result5 = difference([], [1, 2, 3]);
console.log('difference([], [1, 2, 3]) =', result5);
console.log('Ожидается: []\n');

console.log('Тест 6: Второй массив пустой');
const result6 = difference([1, 2, 3], []);
console.log('difference([1, 2, 3], []) =', result6);
console.log('Ожидается: [1, 2, 3]\n');

console.log('Тест 7: Оба массива пустые');
const result7 = difference([], []);
console.log('difference([], []) =', result7);
console.log('Ожидается: []\n');

console.log('=== Альтернативная реализация с Set (для больших массивов) ===\n');

console.log('Тест 8: differenceSet с числами');
const result8 = differenceSet([7, -2, 10, 5, 0], [0, 10]);
console.log('differenceSet([7, -2, 10, 5, 0], [0, 10]) =', result8);
console.log('Ожидается: [7, -2, 5]\n');

console.log('Тест 9: differenceSet со строками');
const result9 = differenceSet(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad']);
console.log('differenceSet(["Beijing", "Kiev"], ["Kiev", "London", "Baghdad"]) =', result9);
console.log('Ожидается: ["Beijing"]\n');

console.log('=== Альтернативная реализация с reduce ===\n');

console.log('Тест 10: differenceReduce с числами');
const result10 = differenceReduce([7, -2, 10, 5, 0], [0, 10]);
console.log('differenceReduce([7, -2, 10, 5, 0], [0, 10]) =', result10);
console.log('Ожидается: [7, -2, 5]\n');

console.log('=== Тест с дубликатами ===\n');

console.log('Тест 11: Разность с дубликатами в первом массиве');
const result11 = difference([1, 2, 2, 3, 3, 3], [2]);
console.log('difference([1, 2, 2, 3, 3, 3], [2]) =', result11);
console.log('Ожидается: [1, 3, 3, 3] (удалены все 2)\n');

console.log('Тест 12: Сложный случай');
const result12 = difference(['a', 'b', 'c', 'd', 'e'], ['b', 'd', 'f']);
console.log('difference(["a", "b", "c", "d", "e"], ["b", "d", "f"]) =', result12);
console.log('Ожидается: ["a", "c", "e"]');

