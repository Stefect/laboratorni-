function seq(...args) {
  const functions = args;
  
  const chainFunction = (value) => {
    if (typeof value === 'number') {
      return functions.reduceRight((acc, fn) => fn(acc), value);
    }
    
    return seq(...functions, value);
  };
  
  return chainFunction;
}

console.log('=== Тестування функції seq() ===\n');

console.log('Тест 1: seq(x => x + 7)(x => x * 2)(5)');
const result1 = seq(x => x + 7)(x => x * 2)(5);
console.log('Результат:', result1);
console.log('Очікується: 17\n');

console.log('Тест 2: seq(x => x * 2)(x => x + 7)(5)');
const result2 = seq(x => x * 2)(x => x + 7)(5);
console.log('Результат:', result2);
console.log('Очікується: 24\n');

console.log('Тест 3: seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)');
const result3 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);
console.log('Результат:', result3);
console.log('Очікується: 3\n');

console.log('Додаткові тести:');
const result4 = seq(x => x - 5)(x => x * 3)(10);
console.log('seq(x => x - 5)(x => x * 3)(10) =', result4);

const result5 = seq(x => x / 2)(x => x + 10)(x => x * 2)(20);
console.log('seq(x => x / 2)(x => x + 10)(x => x * 2)(20) =', result5);
