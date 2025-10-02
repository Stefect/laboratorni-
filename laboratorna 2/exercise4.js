const fn = () => {
  const obj1 = { name: 'Marcus' };
  
  let obj2 = { name: 'Aurelius' };
  
  obj1.name = 'Marcus Aurelius';
  obj2.name = 'Julius Caesar';
  
  obj2 = { name: 'New Object' };
  
  return { obj1, obj2 };
};

const createUser = (name, city) => {
  return { name, city };
};

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julius Caesar', phone: '+380445554434' },
  { name: 'Cicero', phone: '+380445554435' },
];

const findPhoneByName = (name) => {
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
      return phonebook[i].phone;
    }
  }
  return undefined;
};

const phonebookHash = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380445554434',
  'Cicero': '+380445554435',
};

const findPhoneByNameHash = (name) => {
  return phonebookHash[name];
};

export { 
  fn, 
  createUser, 
  phonebook, 
  findPhoneByName, 
  phonebookHash, 
  findPhoneByNameHash 
};
