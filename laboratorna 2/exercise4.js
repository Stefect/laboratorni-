// Вправа 4: Об'єкти та Колекції

// Частина 1: Об'єкти
const fn = () => {
  // Створюємо об'єкт з полем name і записуємо в константу
  const obj1 = { name: 'Marcus' };
  
  // Створюємо об'єкт з полем name і записуємо в змінну
  let obj2 = { name: 'Aurelius' };
  
  // Змінюємо значення поля name в обох об'єктах - ЦЕ ПРАЦЮЄ
  obj1.name = 'Marcus Aurelius';
  obj2.name = 'Julius Caesar';
  
  // Спроба записати посилання на інший об'єкт
  // obj1 = { name: 'New Object' }; // НЕ ПРАЦЮЄ - константу не можна переприсвоїти
  obj2 = { name: 'New Object' }; // ПРАЦЮЄ - змінну можна переприсвоїти
  
  return { obj1, obj2 };
};

// Частина 2: Функція createUser
const createUser = (name, city) => {
  return { name, city };
};

// Частина 3: Колекції - масив об'єктів
const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julius Caesar', phone: '+380445554434' },
  { name: 'Cicero', phone: '+380445554435' },
];

// Функція пошуку телефону по імені (використовує масив)
const findPhoneByName = (name) => {
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
      return phonebook[i].phone;
    }
  }
  return undefined;
};

// Частина 4: Хеш-таблиця (об'єкт)
const phonebookHash = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380445554434',
  'Cicero': '+380445554435',
};

// Функція пошуку телефону по імені (використовує хеш)
const findPhoneByNameHash = (name) => {
  return phonebookHash[name];
};

// Експорт для тестування
export { 
  fn, 
  createUser, 
  phonebook, 
  findPhoneByName, 
  phonebookHash, 
  findPhoneByNameHash 
};
