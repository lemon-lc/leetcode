/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let h1 = l1;
  let h2 = l2;
  const head = new ListNode(0);
  let current = head;
  let carry = 0;
  while (h1 || h2) {
    const value1 = h1 ? h1.val : 0;
    const value2 = h2 ? h2.val : 0;
    const sum = value1 + value2 + carry;
    if (sum >= 10) {
      carry = Math.floor(sum / 10);
    } else {
      carry = 0;
    }
    const val = sum % 10;
    current.next = new ListNode(val);
    current = current.next;
    h1 = h1 && h1.next;
    h2 = h2 && h2.next;
  }
  if(carry) {
    current.next = new ListNode(carry);
  }
  return head.next;
};
// @lc code=end
