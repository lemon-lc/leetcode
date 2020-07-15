/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {}
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const key = target - num;
    if(map[key] !== undefined) {
      return [map[key], i]
    }
    map[num] = i
  }
};
// @lc code=end
