/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null || head.next === null) return head;
  let tail = head;
  let len = 1
  while (tail.next) {
    len++
    tail = tail.next;
  }
  tail.next = head;

  const count = len - (k % len)

  for (let i = 0; i < count; i++) {
    tail = head;
    head = head.next;
  }
  
  tail.next = null;
  return head;
};
// @lc code=end
