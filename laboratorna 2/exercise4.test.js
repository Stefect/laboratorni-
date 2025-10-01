import { test } from 'node:test';
import assert from 'node:assert';
import { 
  fn, 
  createUser, 
  phonebook, 
  findPhoneByName, 
  phonebookHash, 
  findPhoneByNameHash 
} from './exercise4.js';

test('Exercise 4: Об\'єкти та Колекції', async (t) => {
  await t.test('fn повертає об\'єкти', () => {
    const result = fn();
    assert.ok(result.obj1);
    assert.ok(result.obj2);
    assert.strictEqual(typeof result.obj1, 'object');
    assert.strictEqual(typeof result.obj2, 'object');
  });

  await t.test('createUser створює об\'єкт користувача', () => {
    const user = createUser('Marcus Aurelius', 'Roma');
    assert.deepStrictEqual(user, { 
      name: 'Marcus Aurelius', 
      city: 'Roma' 
    });
  });

  await t.test('createUser працює з різними даними', () => {
    const user = createUser('John Doe', 'Kyiv');
    assert.strictEqual(user.name, 'John Doe');
    assert.strictEqual(user.city, 'Kyiv');
  });

  await t.test('phonebook є масивом об\'єктів', () => {
    assert.ok(Array.isArray(phonebook));
    assert.ok(phonebook.length > 0);
    assert.ok(phonebook[0].name);
    assert.ok(phonebook[0].phone);
  });

  await t.test('findPhoneByName знаходить телефон по імені', () => {
    const phone = findPhoneByName('Marcus Aurelius');
    assert.strictEqual(phone, '+380445554433');
  });

  await t.test('findPhoneByName повертає undefined для неіснуючого імені', () => {
    const phone = findPhoneByName('Unknown Person');
    assert.strictEqual(phone, undefined);
  });

  await t.test('phonebookHash є об\'єктом', () => {
    assert.strictEqual(typeof phonebookHash, 'object');
    assert.ok(phonebookHash['Marcus Aurelius']);
  });

  await t.test('findPhoneByNameHash знаходить телефон по імені в хеші', () => {
    const phone = findPhoneByNameHash('Marcus Aurelius');
    assert.strictEqual(phone, '+380445554433');
  });

  await t.test('findPhoneByNameHash повертає undefined для неіснуючого імені', () => {
    const phone = findPhoneByNameHash('Unknown Person');
    assert.strictEqual(phone, undefined);
  });
});
