/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // Step 1: Create something to store the result of each path.
  // Step 2: Build the something with the triangle.

  let costsOfLastLevel = triangle[triangle.length - 1];

  for (let i = triangle.length - 2; i >= 0; i--) {
    const costsOfCurrentLevel = triangle[i];
    for (let j = 0; j < costsOfCurrentLevel.length; j++) {
      costsOfLastLevel[j] =
        costsOfCurrentLevel[j] +
        Math.min(costsOfLastLevel[j], costsOfLastLevel[j + 1]);
    }
  }

  return costsOfLastLevel[0];
};

// key takeaway
// 1. Think about top-down or bottom-up DP
// 2. Sometimes, you can just modify the input in place of O(1) space complexity
// 3. Think about scaling. If the dataset enlarge, does your solution still works?

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
