function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

console.log('=== Тестування функції removeElement() ===\n');

console.log('Тест 1: Видалення числа з масиву');
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log('До:', array1);
removeElement(array1, 5);
console.log('Після removeElement(array, 5):', array1);
console.log('Очікується: [1, 2, 3, 4, 6, 7]\n');

console.log('Тест 2: Видалення рядка з масиву');
const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log('До:', array2);
removeElement(array2, 'Lima');
console.log('Після removeElement(array, "Lima"):', array2);
removeElement(array2, 'Berlin');
console.log('Після removeElement(array, "Berlin"):', array2);
console.log('Очікується: ["Kiev", "Beijing", "Saratov"]\n');

console.log('Тест 3: Видалення першого елемента');
const array3 = [10, 20, 30, 40];
console.log('До:', array3);
removeElement(array3, 10);
console.log('Після removeElement(array, 10):', array3);
console.log('Очікується: [20, 30, 40]\n');

console.log('Тест 4: Видалення останнього елемента');
const array4 = ['a', 'b', 'c', 'd'];
console.log('До:', array4);
removeElement(array4, 'd');
console.log('Після removeElement(array, "d"):', array4);
console.log('Очікується: ["a", "b", "c"]\n');

console.log('Тест 5: Спроба видалити неіснуючий елемент');
const array5 = [1, 2, 3];
console.log('До:', array5);
removeElement(array5, 999);
console.log('Після removeElement(array, 999):', array5);
console.log('Очікується: [1, 2, 3] (без змін)\n');

console.log('Тест 6: Видалення з масиву з дублікатами (видаляється тільки перший)');
const array6 = [1, 2, 3, 2, 4, 2];
console.log('До:', array6);
removeElement(array6, 2);
console.log('Після removeElement(array, 2):', array6);
console.log('Очікується: [1, 3, 2, 4, 2] (видалено тільки перший 2)');
