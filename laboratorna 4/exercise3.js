function ages(persons) {
  const result = {};
  
  for (const name in persons) {
    if (persons.hasOwnProperty(name)) {
      const person = persons[name];
      result[name] = person.died - person.born;
    }
  }
  
  return result;
}

function agesKeys(persons) {
  const result = {};
  const names = Object.keys(persons);
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    result[name] = persons[name].died - persons[name].born;
  }
  
  return result;
}

function agesEntries(persons) {
  const result = {};
  const entries = Object.entries(persons);
  
  for (const [name, person] of entries) {
    result[name] = person.died - person.born;
  }
  
  return result;
}

function agesReduce(persons) {
  return Object.entries(persons).reduce((acc, [name, person]) => {
    acc[name] = person.died - person.born;
    return acc;
  }, {});
}

function agesMap(persons) {
  return Object.fromEntries(
    Object.entries(persons).map(([name, person]) => [
      name,
      person.died - person.born
    ])
  );
}

console.log('=== Тестування функцій обчислення віку ===\n');

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log('1. Варіант з for..in:');
console.log(ages(persons));

console.log('\n2. Варіант з Object.keys():');
console.log(agesKeys(persons));

console.log('\n3. Варіант з Object.entries():');
console.log(agesEntries(persons));

console.log('\n4. Варіант з reduce():');
console.log(agesReduce(persons));

console.log('\n5. Варіант з map() і fromEntries():');
console.log(agesMap(persons));

console.log('\n=== Додатковий тест ===');
const scientists = {
  einstein: { born: 1879, died: 1955 },
  curie: { born: 1867, died: 1934 },
  tesla: { born: 1856, died: 1943 },
};

console.log('ages(scientists) =', ages(scientists));
