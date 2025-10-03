function array() {
  const data = [];
  
  const getElement = (index) => {
    return data[index];
  };
  
  getElement.push = (value) => {
    data.push(value);
  };
  
  getElement.pop = () => {
    return data.pop();
  };
  
  return getElement;
}

console.log('=== Тестування функції array() ===\n');

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log('Після додавання трьох елементів:');
console.log('arr(0) =', arr(0));
console.log('arr(1) =', arr(1));
console.log('arr(2) =', arr(2));

console.log('\nВидалення елементів:');
console.log('arr.pop() =', arr.pop());
console.log('arr.pop() =', arr.pop());
console.log('arr.pop() =', arr.pop());

console.log('\nСпроба видалити з порожнього масиву:');
console.log('arr.pop() =', arr.pop());

console.log('\n=== Додатковий тест ===\n');

const numbers = array();

numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);

console.log('Після додавання чисел:');
console.log('numbers(0) =', numbers(0));
console.log('numbers(1) =', numbers(1));
console.log('numbers(2) =', numbers(2));
console.log('numbers(3) =', numbers(3));

console.log('\nВидалення двох елементів:');
console.log('numbers.pop() =', numbers.pop());
console.log('numbers.pop() =', numbers.pop());

console.log('\nЕлементи, що залишились:');
console.log('numbers(0) =', numbers(0));
console.log('numbers(1) =', numbers(1));
console.log('numbers(2) =', numbers(2));
