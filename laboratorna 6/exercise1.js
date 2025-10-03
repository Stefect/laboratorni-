const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments to pipe must be functions');
    }
  }
  
  return x => fns.reduce((acc, fn) => fn(acc), x);
};

console.log('=== Тестування функції pipe() ===\n');

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log('Тест 1: pipe(inc, twice, cube)');
const f1 = pipe(inc, twice, cube);
const x1 = f1(5);
console.log('f(5) =', x1);
console.log('Очікується: 1728');
console.log('Перевірка: (5 + 1) * 2 = 12, 12^3 = 1728\n');

console.log('Тест 2: pipe(inc, inc)');
const f2 = pipe(inc, inc);
const x2 = f2(7);
console.log('f(7) =', x2);
console.log('Очікується: 9');
console.log('Перевірка: 7 + 1 = 8, 8 + 1 = 9\n');

console.log('Тест 3: Перевірка викидання помилки при передачі не-функції');
try {
  const f3 = pipe(inc, 7, cube);
  console.log('ПОМИЛКА: Виняток не був викинутий!');
} catch (error) {
  console.log('✓ Помилка успішно спіймана:', error.message);
}

console.log('\n=== Додаткові тести ===\n');

const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;

console.log('Тест 4: pipe(double, addTen, square)');
const f4 = pipe(double, addTen, square);
console.log('f(3) =', f4(3));
console.log('Перевірка: 3 * 2 = 6, 6 + 10 = 16, 16 * 16 = 256\n');

console.log('Тест 5: pipe з однією функцією');
const f5 = pipe(cube);
console.log('f(4) =', f5(4));
console.log('Перевірка: 4^3 = 64\n');

console.log('Тест 6: Перевірка з різними типами не-функцій');
try {
  pipe(inc, null, cube);
} catch (error) {
  console.log('✓ Помилка з null:', error.message);
}

try {
  pipe(inc, undefined, cube);
} catch (error) {
  console.log('✓ Помилка з undefined:', error.message);
}

try {
  pipe(inc, 'not a function', cube);
} catch (error) {
  console.log('✓ Помилка з рядком:', error.message);
}
