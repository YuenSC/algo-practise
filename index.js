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
