function iterate(object, callback) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      callback(key, object[key], object);
    }
  }
}

function iterateKeys(object, callback) {
  Object.keys(object).forEach(key => {
    callback(key, object[key], object);
  });
}

function iterateEntries(object, callback) {
  Object.entries(object).forEach(([key, value]) => {
    callback(key, value, object);
  });
}

console.log('=== Тестирование функции iterate() ===\n');

console.log('Тест 1: Итерация простого объекта');
const obj1 = { a: 1, b: 2, c: 3 };
console.log('Объект:', obj1);
console.log('Результат:');
iterate(obj1, (key, value) => {
  console.log({ key, value });
});

console.log('\nТест 2: Итерация с использованием всех параметров');
const obj2 = { x: 10, y: 20, z: 30 };
console.log('Объект:', obj2);
console.log('Результат с доступом к объекту:');
iterate(obj2, (key, value, object) => {
  console.log(`${key}: ${value} (объект содержит ${Object.keys(object).length} ключей)`);
});

console.log('\nТест 3: Итерация объекта со строковыми значениями');
const obj3 = { name: 'John', city: 'New York', country: 'USA' };
console.log('Объект:', obj3);
console.log('Результат:');
iterate(obj3, (key, value) => {
  console.log(`${key} => ${value}`);
});

console.log('\nТест 4: Пустой объект');
const obj4 = {};
console.log('Объект:', obj4);
console.log('Результат:');
iterate(obj4, (key, value) => {
  console.log({ key, value });
});
console.log('(ничего не выведено - объект пустой)');

console.log('\nТест 5: Объект с разными типами значений');
const obj5 = { 
  num: 42, 
  str: 'hello', 
  bool: true, 
  arr: [1, 2, 3],
  obj: { nested: 'value' }
};
console.log('Объект:', obj5);
console.log('Результат:');
iterate(obj5, (key, value) => {
  console.log(`${key}: ${JSON.stringify(value)} (${typeof value})`);
});

console.log('\n=== Альтернативная реализация с Object.keys() ===\n');

console.log('Тест 6: iterateKeys()');
const obj6 = { a: 1, b: 2, c: 3 };
iterateKeys(obj6, (key, value) => {
  console.log({ key, value });
});

console.log('\n=== Альтернативная реализация с Object.entries() ===\n');

console.log('Тест 7: iterateEntries()');
const obj7 = { a: 1, b: 2, c: 3 };
iterateEntries(obj7, (key, value) => {
  console.log({ key, value });
});

console.log('\n=== Практический пример: сумма значений ===\n');

const numbers = { first: 10, second: 20, third: 30 };
let sum = 0;
iterate(numbers, (key, value) => {
  sum += value;
});
console.log('Объект:', numbers);
console.log('Сумма значений:', sum);

