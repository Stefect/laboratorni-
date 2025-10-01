'use strict';

const list = [
  true, 'hello', 5, 12, -200, false, false, 'word', true, 322, 52, '1',
  undefined, null, 0, '', 'JavaScript', -15.5, 'Node.js', 100, 'Programming',
];
const obj = { string: 0, boolean: 0, number: 0, undefined: 0, object: 0 };
for (const item of list) {
  const type = typeof item;
  obj[type]++;
}

console.dir({ obj });
