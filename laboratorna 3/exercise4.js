const introspect = (iface) => {
  return Object.keys(iface)
    .filter(key => typeof iface[key] === 'function')
    .map(key => [key, iface[key].length]);
};

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

module.exports = { introspect };
