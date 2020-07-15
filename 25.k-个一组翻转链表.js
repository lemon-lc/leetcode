/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverse = (head, tail) => {
  while (head)
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0);
  let curr = head;
  let prev = dummy;
  let tail
  while (curr) {
    for(let i = 0; i < n; i++) {
      curr = curr.next
    }
    prev = tail
  }
  return dummy.next
};
// @lc code=end
