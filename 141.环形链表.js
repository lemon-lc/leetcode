/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const visited = [];
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if(!head || !head.next) return false;
  let fast = head.next
  let slow = head 
  while (slow !== fast) {
    if(!fast || !fast.next) return false;
    slow = slow.next
    fast = fast.next.next
  }
  return true;
};
// @lc code=end
