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

console.log('=== Тестування функції difference() ===\n');

console.log('Тест 1: Різниця числових масивів');
const array1a = [7, -2, 10, 5, 0];
const array2a = [0, 10];
const result1 = difference(array1a, array2a);
console.log('array1:', array1a);
console.log('array2:', array2a);
console.log('difference(array1, array2) =', result1);
console.log('Очікується: [7, -2, 5]\n');

console.log('Тест 2: Різниця рядкових масивів');
const array1b = ['Beijing', 'Kiev'];
const array2b = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array1b, array2b);
console.log('array1:', array1b);
console.log('array2:', array2b);
console.log('difference(array1, array2) =', result2);
console.log('Очікується: ["Beijing"]\n');

console.log('Тест 3: Немає спільних елементів');
const result3 = difference([1, 2, 3], [4, 5, 6]);
console.log('difference([1, 2, 3], [4, 5, 6]) =', result3);
console.log('Очікується: [1, 2, 3]\n');

console.log('Тест 4: Всі елементи спільні');
const result4 = difference([1, 2, 3], [1, 2, 3]);
console.log('difference([1, 2, 3], [1, 2, 3]) =', result4);
console.log('Очікується: []\n');

console.log('Тест 5: Перший масив порожній');
const result5 = difference([], [1, 2, 3]);
console.log('difference([], [1, 2, 3]) =', result5);
console.log('Очікується: []\n');

console.log('Тест 6: Другий масив порожній');
const result6 = difference([1, 2, 3], []);
console.log('difference([1, 2, 3], []) =', result6);
console.log('Очікується: [1, 2, 3]\n');

console.log('Тест 7: Обидва масиви порожні');
const result7 = difference([], []);
console.log('difference([], []) =', result7);
console.log('Очікується: []\n');

console.log('=== Альтернативна реалізація з Set (для великих масивів) ===\n');

console.log('Тест 8: differenceSet з числами');
const result8 = differenceSet([7, -2, 10, 5, 0], [0, 10]);
console.log('differenceSet([7, -2, 10, 5, 0], [0, 10]) =', result8);
console.log('Очікується: [7, -2, 5]\n');

console.log('Тест 9: differenceSet з рядками');
const result9 = differenceSet(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad']);
console.log('differenceSet(["Beijing", "Kiev"], ["Kiev", "London", "Baghdad"]) =', result9);
console.log('Очікується: ["Beijing"]\n');

console.log('=== Альтернативна реалізація з reduce ===\n');

console.log('Тест 10: differenceReduce з числами');
const result10 = differenceReduce([7, -2, 10, 5, 0], [0, 10]);
console.log('differenceReduce([7, -2, 10, 5, 0], [0, 10]) =', result10);
console.log('Очікується: [7, -2, 5]\n');

console.log('=== Тест з дублікатами ===\n');

console.log('Тест 11: Різниця з дублікатами в першому масиві');
const result11 = difference([1, 2, 2, 3, 3, 3], [2]);
console.log('difference([1, 2, 2, 3, 3, 3], [2]) =', result11);
console.log('Очікується: [1, 3, 3, 3] (видалені всі 2)\n');

console.log('Тест 12: Складний випадок');
const result12 = difference(['a', 'b', 'c', 'd', 'e'], ['b', 'd', 'f']);
console.log('difference(["a", "b", "c", "d", "e"], ["b", "d", "f"]) =', result12);
console.log('Очікується: ["a", "c", "e"]');

