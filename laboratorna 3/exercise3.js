/**
 * Converts an IPv4 address string to a 32-bit integer
 * @param {string} ip - IPv4 address string (default: '127.0.0.1')
 * @returns {number} 32-bit integer representation of the IP address
 */
const ipToInt = (ip = '127.0.0.1') => {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte, index) => {
      const shift = (3 - index) * 8;
      return acc + (byte << shift);
    }, 0);
};

// Test examples
console.log('127.0.0.1      ->', ipToInt('127.0.0.1'));         // 2130706433
console.log('10.0.0.1       ->', ipToInt('10.0.0.1'));          // 167772161
console.log('192.168.1.10   ->', ipToInt('192.168.1.10'));      // -1062731510
console.log('165.225.133.150->', ipToInt('165.225.133.150'));   // -1511946858
console.log('0.0.0.0        ->', ipToInt('0.0.0.0'));           // 0
console.log('8.8.8.8        ->', ipToInt('8.8.8.8'));           // 134744072 (0x08080808)
console.log('Default (no arg)->', ipToInt());                   // 2130706433

// Show hexadecimal representation for 8.8.8.8
console.log('8.8.8.8 (hex)  -> 0x' + ipToInt('8.8.8.8').toString(16)); // 0x8080808

module.exports = { ipToInt };
