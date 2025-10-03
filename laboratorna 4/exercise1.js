function sumFor(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

function sumForOf(...args) {
  let result = 0;
  for (const value of args) {
    result += value;
  }
  return result;
}

function sumWhile(...args) {
  let result = 0;
  let i = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
}

function sumDoWhile(...args) {
  let result = 0;
  if (args.length === 0) return result;
  
  let i = 0;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  
  return result;
}

function sumReduce(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}

console.log('=== Тестування функцій sum ===\n');

console.log('1. Цикл for:');
console.log('sumFor(1, 2, 3) =', sumFor(1, 2, 3));
console.log('sumFor(0) =', sumFor(0));
console.log('sumFor() =', sumFor());
console.log('sumFor(1, -1, 1) =', sumFor(1, -1, 1));
console.log('sumFor(10, -1, -1, -1) =', sumFor(10, -1, -1, -1));

console.log('\n2. Цикл for..of:');
console.log('sumForOf(1, 2, 3) =', sumForOf(1, 2, 3));
console.log('sumForOf(0) =', sumForOf(0));
console.log('sumForOf() =', sumForOf());
console.log('sumForOf(1, -1, 1) =', sumForOf(1, -1, 1));
console.log('sumForOf(10, -1, -1, -1) =', sumForOf(10, -1, -1, -1));

console.log('\n3. Цикл while:');
console.log('sumWhile(1, 2, 3) =', sumWhile(1, 2, 3));
console.log('sumWhile(0) =', sumWhile(0));
console.log('sumWhile() =', sumWhile());
console.log('sumWhile(1, -1, 1) =', sumWhile(1, -1, 1));
console.log('sumWhile(10, -1, -1, -1) =', sumWhile(10, -1, -1, -1));

console.log('\n4. Цикл do..while:');
console.log('sumDoWhile(1, 2, 3) =', sumDoWhile(1, 2, 3));
console.log('sumDoWhile(0) =', sumDoWhile(0));
console.log('sumDoWhile() =', sumDoWhile());
console.log('sumDoWhile(1, -1, 1) =', sumDoWhile(1, -1, 1));
console.log('sumDoWhile(10, -1, -1, -1) =', sumDoWhile(10, -1, -1, -1));

console.log('\n5. Метод reduce:');
console.log('sumReduce(1, 2, 3) =', sumReduce(1, 2, 3));
console.log('sumReduce(0) =', sumReduce(0));
console.log('sumReduce() =', sumReduce());
console.log('sumReduce(1, -1, 1) =', sumReduce(1, -1, 1));
console.log('sumReduce(10, -1, -1, -1) =', sumReduce(10, -1, -1, -1));
