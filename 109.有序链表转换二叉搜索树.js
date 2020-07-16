/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if(!head) return null;
  const mid = findMidNode(head);
  const node = new TreeNode(mid.val);
  if (mid === head) {
    return node;
  }
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(mid.next);
  return node;
};
// @lc code=end
