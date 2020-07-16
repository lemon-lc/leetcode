/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;
  let next = head;
  while (next && next.next) {
    if(next.val === next.next.val) {
      while(next.next && next.val === next.next.val) {
        next.next = next.next.next;
      }
      curr.next = next.next;
      next = next.next;
    } else {
      curr = curr.next;
      next = next.next;
    }
  }
  
  return dummy.next;
};
// @lc code=end
