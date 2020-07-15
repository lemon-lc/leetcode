/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//   const dummy = new ListNode(0)
//   dummy.next = head
//   let len = 0;
//   let curr = head
//   while (curr) {
//     len++;
//     curr = curr.next;
//   }
//   len -= n;
//   curr = dummy;
//   while (len) {
//     curr = curr.next;
//     len--
//   }
//   curr.next = curr.next.next
//   return dummy.next;
// };

var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  let first = dummy
  let second = dummy
  for(let i = 0; i < n + 1; i++) {
    first = first.next
  }
  while(first) {
    second = second.next
    first = first.next
  }
  second.next = second.next.next
  return dummy.next;
};

// @lc code=end

