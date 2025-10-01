'use strict';

const list = [
  true, 'hello', 5, 12, -200, false, false, 'word', true, 322, 52, '1',
];
const obj = { string: 0, boolean: 0, number: 0 };
for (const i in list) obj[typeof (list[i])]++;

console.dir({ obj });
