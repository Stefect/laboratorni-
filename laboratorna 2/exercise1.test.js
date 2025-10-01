import { test } from 'node:test';
import assert from 'node:assert';
import { name, birthYear, greeting } from './exercise1.js';

test('Exercise 1: Ідентифікатори', async (t) => {
  await t.test('змінна name має бути рядком', () => {
    assert.strictEqual(typeof name, 'string');
    assert.ok(name.length > 0);
  });

  await t.test('константа birthYear має бути числом', () => {
    assert.strictEqual(typeof birthYear, 'number');
    assert.ok(birthYear > 1900 && birthYear < 2025);
  });

  await t.test('функція greeting має існувати', () => {
    assert.strictEqual(typeof greeting, 'function');
  });
});
