/**
 * Generates a random string of specified length from given character set
 * @param {number} length - Length of the generated string
 * @param {string} characters - Set of characters to use
 * @returns {string} Random string of specified length
 */
const generateKey = (length, characters) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

// Test examples
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log('Generated key (16):', generateKey(16, characters)); // eg599gb60q926j8i
console.log('Generated key (32):', generateKey(32, characters)); // Longer key
console.log('Generated key (8, "ABC123"):', generateKey(8, 'ABC123')); // Custom character set

module.exports = { generateKey };
