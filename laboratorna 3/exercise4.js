/**
 * Performs introspection on an object to extract function names and their argument counts
 * @param {Object} iface - Object containing methods to introspect
 * @returns {Array<Array>} 2D array of [functionName, argumentCount] pairs
 */
const introspect = (iface) => {
  return Object.keys(iface)
    .filter(key => typeof iface[key] === 'function')
    .map(key => [key, iface[key].length]);
};

// Test example
const testObject = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

console.log('Introspection result:');
console.log(introspect(testObject));
// Expected output:
// [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

// Additional test with mixed object
const mixedObject = {
  name: 'Test',
  count: 42,
  fn1: () => {},
  fn2: (a, b, c, d) => a + b + c + d,
  method: function(x) { return x * 2; },
  data: [1, 2, 3]
};

console.log('\nIntrospection of mixed object:');
console.log(introspect(mixedObject));
// Expected output:
// [
//   ['fn1', 0],
//   ['fn2', 4],
//   ['method', 1]
// ]

module.exports = { introspect };
