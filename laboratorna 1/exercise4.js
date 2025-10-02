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

const typeCount = {};

for (const item of array) {
  const type = typeof item;
  
  if (typeCount[type] === undefined) {
    typeCount[type] = 0;
  }
  
  typeCount[type]++;
}

console.log('Результати підрахунку типів (динамічно):');
console.dir(typeCount);
