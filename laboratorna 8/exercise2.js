function store(value) {
  return () => value;
}

function storeWithSetter(initialValue) {
  let value = initialValue;
  
  const getter = () => value;
  getter.set = (newValue) => {
    value = newValue;
  };
  
  return getter;
}

function storeMultiple(...values) {
  return () => values;
}

console.log('=== Тестирование функции store() ===\n');

console.log('Тест 1: Хранение числа');
const read1 = store(5);
const value1 = read1();
console.log('store(5)');
console.log('Результат:', value1);
console.log('Ожидается: 5\n');

console.log('Тест 2: Хранение строки');
const read2 = store('Hello, World!');
const value2 = read2();
console.log('store("Hello, World!")');
console.log('Результат:', value2);
console.log('Ожидается: "Hello, World!"\n');

console.log('Тест 3: Хранение объекта');
const obj = { name: 'John', age: 30 };
const read3 = store(obj);
const value3 = read3();
console.log('store({ name: "John", age: 30 })');
console.log('Результат:', value3);
console.log('Ожидается: { name: "John", age: 30 }\n');

console.log('Тест 4: Хранение массива');
const arr = [1, 2, 3, 4, 5];
const read4 = store(arr);
const value4 = read4();
console.log('store([1, 2, 3, 4, 5])');
console.log('Результат:', value4);
console.log('Ожидается: [1, 2, 3, 4, 5]\n');

console.log('Тест 5: Хранение функции');
const fn = () => 'I am a function';
const read5 = store(fn);
const value5 = read5();
console.log('store(() => "I am a function")');
console.log('Результат:', value5());
console.log('Ожидается: "I am a function"\n');

console.log('Тест 6: Множественные вызовы возвращают одно и то же значение');
const read6 = store(42);
console.log('Первый вызов:', read6());
console.log('Второй вызов:', read6());
console.log('Третий вызов:', read6());
console.log('Все вызовы возвращают: 42\n');

console.log('Тест 7: Хранение null и undefined');
const read7a = store(null);
const read7b = store(undefined);
console.log('store(null) =', read7a());
console.log('store(undefined) =', read7b());

console.log('\n=== Расширенная версия с setter ===\n');

console.log('Тест 8: storeWithSetter - чтение и запись');
const readWrite = storeWithSetter(10);
console.log('Начальное значение:', readWrite());
readWrite.set(20);
console.log('После readWrite.set(20):', readWrite());
readWrite.set(30);
console.log('После readWrite.set(30):', readWrite());

console.log('\n=== Версия с множественными значениями ===\n');

console.log('Тест 9: storeMultiple - хранение нескольких значений');
const readMany = storeMultiple(1, 2, 3, 4, 5);
console.log('storeMultiple(1, 2, 3, 4, 5)');
console.log('Результат:', readMany());

console.log('\n=== Практический пример: конфигурация ===\n');

const config = store({
  host: 'localhost',
  port: 3000,
  debug: true
});

console.log('Конфигурация:', config());
console.log('Порт:', config().port);
console.log('Debug режим:', config().debug);

