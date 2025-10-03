function removeElements(array, ...items) {
  for (const item of items) {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  }
}

console.log('=== Тестування функції removeElements() ===\n');

console.log('Тест 1: Видалення декількох чисел');
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log('До:', array1);
removeElements(array1, 5, 1, 6);
console.log('Після removeElements(array, 5, 1, 6):', array1);
console.log('Очікується: [2, 3, 4, 7]\n');

console.log('Тест 2: Видалення декількох рядків (включно з неіснуючим)');
const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log('До:', array2);
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log('Після removeElements(array, "Lima", "Berlin", "Kiev"):', array2);
console.log('Очікується: ["Beijing", "Saratov"]\n');

console.log('Тест 3: Видалення всіх елементів масиву');
const array3 = [10, 20, 30];
console.log('До:', array3);
removeElements(array3, 10, 20, 30);
console.log('Після removeElements(array, 10, 20, 30):', array3);
console.log('Очікується: []\n');

console.log('Тест 4: Видалення дублікатів');
const array4 = [1, 2, 2, 3, 2, 4, 2, 5];
console.log('До:', array4);
removeElements(array4, 2);
console.log('Після removeElements(array, 2):', array4);
console.log('Очікується: [1, 3, 4, 5] (всі входження 2 видалено)\n');

console.log('Тест 5: Видалення неіснуючих елементів');
const array5 = ['apple', 'banana', 'orange'];
console.log('До:', array5);
removeElements(array5, 'grape', 'melon');
console.log('Після removeElements(array, "grape", "melon"):', array5);
console.log('Очікується: ["apple", "banana", "orange"] (без змін)\n');

console.log('Тест 6: Видалення з дублікатами в параметрах');
const array6 = [1, 2, 3, 4, 5];
console.log('До:', array6);
removeElements(array6, 2, 4, 2, 4);
console.log('Після removeElements(array, 2, 4, 2, 4):', array6);
console.log('Очікується: [1, 3, 5]\n');

console.log('Тест 7: Змішаний тест з дублікатами');
const array7 = [1, 2, 3, 2, 4, 3, 5, 2];
console.log('До:', array7);
removeElements(array7, 2, 3);
console.log('Після removeElements(array, 2, 3):', array7);
console.log('Очікується: [1, 4, 5]');
