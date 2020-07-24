/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(-Infinity);
  dummy.next = head;
  let cur = head
  let next = head.next
  while (next) {
    if(next.val > cur.val) {
      cur = next
      next = next.next
    } else {
      cur.next = next.next
      let pre1 = dummy
      let pre2 = dummy.next
      while (pre2.val < next.val) {
        pre1 = pre2
        pre2 = pre2.next
      }
      pre1.next = next
      next.next = pre2
      next = cur.next
    }
  }
  return dummy.next;
};
// @lc code=end
