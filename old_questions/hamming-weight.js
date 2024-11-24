/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    n &= n - 1; // This is the key operation
    count++;
  }

  return count;
};

const ans = hammingWeight(2147483645);
console.log("ans", ans);

// Pre-computed lookup table for 8-bit numbers
const BYTE_TABLE = new Uint8Array(256);
for (let i = 0; i < 256; i++) {
  BYTE_TABLE[i] = (i & 1) + BYTE_TABLE[i >> 1];
}

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight_divide_and_conquer = function (n) {
  // Handle 32-bit integers by processing 8 bits at a time
  return (
    BYTE_TABLE[n & 0xff] +
    BYTE_TABLE[(n >> 8) & 0xff] +
    BYTE_TABLE[(n >> 16) & 0xff] +
    BYTE_TABLE[(n >> 24) & 0xff]
  );
};
