/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function findMidNode(head) {
  let fastPt = head;
  let slowPt = head;
  let prevPt = null;
  while (fastPt && fastPt.next) {
    prevPt = slowPt;
    slowPt = slowPt.next;
    fastPt = fastPt.next.next;
  }
  if (prevPt) {
    prevPt.next = null;
  }
  return slowPt;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;
  const mid = findMidNode(head);
  let left = sortList(head);
  let right = sortList(mid);
  let temp = new ListNode(0);
  const res = temp;
  while (left && right) {
    if (left.val > right.val) {
      temp.next = right;
      right = right.next;
    } else {
      temp.next = left;
      left = left.next;
    }
    temp = temp.next;
  }
  temp.next = left ? left : right;
  return res.next;
};
// @lc code=end
