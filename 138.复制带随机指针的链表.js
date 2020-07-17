/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var visitedMap = new Map();

var copyRandomList = function (head) {
  if (!head) return null;
  if (visitedMap.has(head)) {
    return visitedMap.get(head);
  }

  const node = new Node(head.val, null, null);
  visitedMap.set(head, node);
  node.next = copyRandomList(head.next);
  node.random = copyRandomList(head.random);
  return node;
};
// @lc code=end
