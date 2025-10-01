// Вправа 4: Динамічне створення ключів для підрахунку типів

// Створюємо вихідний масив з різними типами даних
const array = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'world',
  null,
  undefined,
  { key: 'value' },
  [1, 2, 3],
  42,
  'JavaScript',
  0,
  '',
  true,
  Symbol('test'),
  BigInt(9007199254740991),
  function() {},
  NaN,
  Infinity,
  'test',
  100,
  false
];

// Створюємо порожній об'єкт-колекцію
const typeCount = {};

// Проходимо по масиву циклом for..of
// і динамічно додаємо ключі типів
for (const item of array) {
  const type = typeof item;
  
  // Якщо ключ не існує, створюємо його зі значенням 0
  if (typeCount[type] === undefined) {
    typeCount[type] = 0;
  }
  
  // Збільшуємо лічильник для цього типу
  typeCount[type]++;
}

console.log('Результати підрахунку типів (динамічно):');
console.dir(typeCount);
