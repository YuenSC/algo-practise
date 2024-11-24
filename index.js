/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((acc, prev) => acc ^ prev, 0);
};

const ans = singleNumber([4, 1, 2, 1, 2]);
console.log(ans);
