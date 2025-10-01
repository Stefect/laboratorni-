import { test } from 'node:test';
import assert from 'node:assert';
import { range, rangeOdd } from './exercise2.js';

test('Exercise 2: Цикли', async (t) => {
  await t.test('range(15, 30) повертає всі числа від 15 до 30', () => {
    const result = range(15, 30);
    assert.deepStrictEqual(result, [
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30
    ]);
  });

  await t.test('range(0, 5) повертає всі числа від 0 до 5', () => {
    const result = range(0, 5);
    assert.deepStrictEqual(result, [0, 1, 2, 3, 4, 5]);
  });

  await t.test('rangeOdd(15, 30) повертає непарні числа від 15 до 30', () => {
    const result = rangeOdd(15, 30);
    assert.deepStrictEqual(result, [15, 17, 19, 21, 23, 25, 27, 29]);
  });

  await t.test('rangeOdd(0, 10) повертає непарні числа від 0 до 10', () => {
    const result = rangeOdd(0, 10);
    assert.deepStrictEqual(result, [1, 3, 5, 7, 9]);
  });
});
