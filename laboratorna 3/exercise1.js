/**
 * Generates a pseudo-random number between min and max (inclusive)
 * @param {number} min - Minimum value (or max if second parameter is omitted)
 * @param {number} max - Maximum value (optional)
 * @returns {number} Random number between min and max
 */
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Test examples
console.log('random(10, 20):', random(10, 20)); // Random number between 10 and 20
console.log('random(50):', random(50));          // Random number between 0 and 50
console.log('random(100):', random(100));        // Random number between 0 and 100

module.exports = { random };
