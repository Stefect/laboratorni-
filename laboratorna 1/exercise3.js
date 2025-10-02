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

const typeCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  function: 0,
  symbol: 0,
  bigint: 0
};

for (const item of array) {
  const type = typeof item;
  typeCount[type]++;
}

console.log('Результати підрахунку типів:');
console.dir(typeCount);
