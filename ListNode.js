/**
 * class ListNode {
 *   nValue: number;
 *   pNext: ListNode;
 * }
 * 单向链表：
 *  实现在链表末尾添加节点
 */
function AddToTail(pHead, value) {
    var newNode = new ListNode()
    newNode.nValue = value
    newNode.pNext = null

    if (!pHead) pHead = newNode

    var pNode = pHead
    while(pHead.next()) {
        pNode = pHead.next()
    }

    pNode.next = newNode
}

/**
 * 单向链表：
 *  链表中找到第一个含有某数值的节点并删除
 */
function RemoveNode(pHead, value) {
    if (!pHead) return
    
    var pToBeDeleted = null
    if (pHead.nValue === value) {
        pToBeDeleted = pHead
        pHead = pHead.next()
    } else {
        var pNode = pHead
        while(pNode.next()) {
            if (pNode.next().nValue === value) {
                var delNode = pNode.next()
                pToBeDeleted = delNode
                break;
            }
        }
    }

    if (pToBeDeleted !== null) {
        delete pToBeDeleted
    }
}

/**
 * 输入一个链表头节点，从尾到头打印出每个节点的值
 * 
 * 思路：
 *  1.遍历链表，修改指向   
 *      修改了原有结构
 *  2.stack 遍历链表，放入stack,循环出栈
 *  3.递归 如果有下一个节点 打印下一个
 */
function PrintReverse_listNode_stack(pHead) {
   var stack = []

   var pNode = pHead
   while(pNode.next()) {
      pNode = pNode.next()
      stack.push(pNode)
   }

   for (let i = 0; i < stack.length; i++) {
        console.log(stack.shift())
   }
}

function PrintReverse_listNode_recursion(pHead) {
    var pNode = pHead
    while(pNode.next()) {
       pNode = pNode.next()
       PrintReverse_listNode_recursion(pHead)
    }
    console.log(pHead)
}