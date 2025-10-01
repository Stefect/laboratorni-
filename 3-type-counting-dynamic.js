// Підрахунок елементів різних типів у масиві
// Динамічне додавання ключів

// 1. Створюємо вихідний масив зі значеннями різних типів
const data = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  null,
  undefined,
  42,
  'JavaScript',
  true,
  0,
  '',
  'Node.js',
  -15,
  true,
  'Programming',
  100,
  false,
  'Code',
  NaN,
  Infinity,
  Symbol('test'),
  BigInt(9007199254740991),
  3.14,
  'Hello World'
];

// 2. Створюємо порожній об'єкт-колекцію
const typeCount = {};

// 3. Проходимося по масиву і додаємо типи динамічно
for (const item of data) {
  const type = typeof item;
  
  // Якщо ключ ще не існує, створюємо його зі значенням 0
  if (typeCount[type] === undefined) {
    typeCount[type] = 0;
  }
  
  // Збільшуємо лічильник
  typeCount[type] += 1;
}

console.log('Масив даних:');
console.dir(data);
console.log('\nПідрахунок типів даних (динамічно):');
console.dir(typeCount);
