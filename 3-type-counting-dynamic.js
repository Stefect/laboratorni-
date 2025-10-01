'use strict';

const list = [
  'Petrovich', 42, true, 'Vlad', 14, false, '+', 'Dota', 322,
];
const obj = {};

for (const i in list) {
  const type = typeof (list[i]);
  if (type in obj) obj[type]++;
  else obj[type] = 1;
}

console.dir({ obj });
