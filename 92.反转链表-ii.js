/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let left = head
  let stop = false
  const reverse = (right, l, r) => {
    if(r === 1) return
    if(l > 1) left = left.next
    right = right.next
    reverse(right, l - 1, r - 1)
    if(left === right || right.next === left) {
      stop = true
    }
    if(!stop){
      let t = left.val
      left.val = right.val
      right.val = t
      left = left.next
    }
  }
  reverse(head, m, n)
  return head;
};
// @lc code=end

