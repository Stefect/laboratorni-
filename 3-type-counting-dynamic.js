'use strict';

const list = [
  'Apple', 156, false, 'Banana', -89, true, '@', 'Coffee', 512,
  null, undefined, 'Dragon', 73, '', 0, 'Eagle', -42, true,
];
const obj = {};

for (const i in list) {
  const type = typeof (list[i]);
  if (type in obj) obj[type]++;
  else obj[type] = 1;
}

console.dir({ obj });
