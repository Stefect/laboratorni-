// 1. Функція inc з скалярним типом (передача за значенням)
// Функція приймає число і повертає його інкрементоване значення
function inc(n) {
  return n + 1;
}

// Приклад використання
const a = 5;
const b = inc(a);
console.log('Скалярний тип (передача за значенням):');
console.dir({ a, b });

// 2. Функція inc з об'єктним типом (передача за посиланням)
// Функція приймає об'єкт і змінює його поле n
function incByReference(num) {
  num.n += 1;
}

// Приклад використання
const obj = { n: 5 };
console.log('\nОб\'єктний тип (передача за посиланням):');
console.log('До виклику inc:', obj);
incByReference(obj);
console.log('Після виклику inc:', obj);
console.dir(obj);
