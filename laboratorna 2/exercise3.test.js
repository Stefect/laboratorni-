import { test } from 'node:test';
import assert from 'node:assert';
import { average, square, cube, calculate } from './exercise3.js';

test('Exercise 3: Функції', async (t) => {
  await t.test('average обчислює середнє арифметичне', () => {
    assert.strictEqual(average(4, 6), 5);
    assert.strictEqual(average(10, 20), 15);
    assert.strictEqual(average(0, 100), 50);
  });

  await t.test('square обчислює квадрат числа', () => {
    assert.strictEqual(square(2), 4);
    assert.strictEqual(square(5), 25);
    assert.strictEqual(square(10), 100);
  });

  await t.test('cube обчислює куб числа', () => {
    assert.strictEqual(cube(2), 8);
    assert.strictEqual(cube(3), 27);
    assert.strictEqual(cube(5), 125);
  });

  await t.test('calculate повертає масив з 10 елементів', () => {
    const result = calculate();
    assert.strictEqual(result.length, 10);
  });

  await t.test('calculate правильно обчислює середнє квадрату та кубу', () => {
    const result = calculate();
    // Для i=0: square(0)=0, cube(0)=0, average(0,0)=0
    assert.strictEqual(result[0], 0);
    // Для i=2: square(2)=4, cube(2)=8, average(4,8)=6
    assert.strictEqual(result[2], 6);
    // Для i=5: square(5)=25, cube(5)=125, average(25,125)=75
    assert.strictEqual(result[5], 75);
  });
});
