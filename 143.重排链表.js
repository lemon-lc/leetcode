/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return head;
  const mid = findMidNode(head);
  let [right] = reverse(mid);
  let left = head;
  while (left) {
    const temp1 = left.next;
    const temp2 = right.next;
    left.next = right;
    if (temp1) {
      right.next = temp1;
    }
    left = temp1;
    right = temp2;
  }
  return head;
};

function findMidNode(head) {
  let fast = head;
  let slow = head;
  let prev;
  while (fast && fast.next) {
    prev = slow;
    fast = fast.next.next;
    slow = slow.next;
  }
  if (prev) {
    prev.next = null;
  }
  return slow;
}

function reverse(head) {
  if (!head.next) return [head, head];

  const [node, tail] = reverse(head.next);
  tail.next = head;
  head.next = null;
  return [node, head];
}

// @lc code=end
