const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('random(10, 20):', random(10, 20));
console.log('random(50):', random(50));
console.log('random(100):', random(100));

module.exports = { random };
