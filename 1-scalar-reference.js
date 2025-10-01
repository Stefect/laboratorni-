'use strict';

// Реалізація 1: Функція з сигнатурою inc(n: number): number
// Повертає нове значення, не змінюючи оригінальну змінну
const incValue = (n) => {
  return n + 1;
};

const a = 5;
const b = incValue(a);
console.dir({ a, b });
console.log('Результат incValue: a =', a, ', b =', b);


// Реалізація 2: Функція з сигнатурою inc(num: Num)
// Змінює поле n об'єкта, переданого за посиланням
const incObject = (num) => {
  num.n++;
};

const obj = { n: 5 };
incObject(obj);
console.dir(obj);
console.log('Результат incObject: obj.n =', obj.n);
