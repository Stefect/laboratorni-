// Підрахунок елементів різних типів у масиві

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

// 2. Створюємо об'єкт-колекцію з початковими значеннями
const typeCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  symbol: 0,
  bigint: 0
};

// 3. Проходимося по масиву і підраховуємо типи
for (const item of data) {
  const type = typeof item;
  typeCount[type] += 1;
}

console.log('Масив даних:');
console.dir(data);
console.log('\nПідрахунок типів даних:');
console.dir(typeCount);
