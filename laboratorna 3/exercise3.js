const ipToInt = (ip = '127.0.0.1') => {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte, index) => {
      const shift = (3 - index) * 8;
      return acc + (byte << shift);
    }, 0);
};

console.log('127.0.0.1      ->', ipToInt('127.0.0.1'));
console.log('10.0.0.1       ->', ipToInt('10.0.0.1'));
console.log('192.168.1.10   ->', ipToInt('192.168.1.10'));
console.log('165.225.133.150->', ipToInt('165.225.133.150'));
console.log('0.0.0.0        ->', ipToInt('0.0.0.0'));
console.log('8.8.8.8        ->', ipToInt('8.8.8.8'));
console.log('Default (no arg)->', ipToInt());

console.log('8.8.8.8 (hex)  -> 0x' + ipToInt('8.8.8.8').toString(16));

module.exports = { ipToInt };
