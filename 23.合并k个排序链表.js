/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//   if(!lists.length) return null;
//   return lists.reduce(function (l1, l2) {
//     return mergeTwoLists(l1, l2);
//   });
// };
// 分治
const mergeKLists = function (lists) {
  if(!lists.length) return null;
  return merge(lists, 0, lists.length - 1)
}

const merge = function (lists, left, right) {
  if(left === right) return lists[left];
  const mid = left + Math.floor((right - left) / 2);
  const l1 = merge(lists, left, mid);
  const l2 = merge(lists, mid + 1, right);
  return mergeTwoLists(l1, l2)
}
// @lc code=end
