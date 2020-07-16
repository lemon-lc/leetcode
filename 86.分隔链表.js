/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const before_head = new ListNode(0)
  const after_head = new ListNode(0)
  let before = before_head
  let after = after_head
  while (head) {
    if(head.val < x) {
      before.next = head
      before = before.next
    } else {
      after.next = head
      after = after.next
    }
    head = head.next
  }
  before.next = after_head.next
  after.next = null
  return before_head.next
};
// @lc code=end
