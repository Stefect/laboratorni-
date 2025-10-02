const generateKey = (length, characters) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log('Generated key (16):', generateKey(16, characters));
console.log('Generated key (32):', generateKey(32, characters));
console.log('Generated key (8, "ABC123"):', generateKey(8, 'ABC123'));

module.exports = { generateKey };
