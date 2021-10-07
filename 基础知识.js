/**
 *  项目经验：
    * 1.项目背景
    *   项目规模 功能 目标用户
    * 2.自己的任务
    *   区分负责和参加，负责的话需要了解总体框架设计，核心算法，团队合作
    * 3.具体做法
    *   eg:基于什么平台什么工具哪些技术 
    *      测试方式
    * 4.贡献成果
    *       最好用数字加以说明 
    *       性能提高百分之多少
    *       修改多少bug
    * 5.常见问题
    *       碰到的最大问题是什么 怎么解决
    *       项目中学到什么
    *       和其他人员（开发 测试 设计 PM）冲突，如何解决
 * 掌握技能
    * 1.了解 熟悉 精通
 * 具备素质
    * 1.扎实的基础知识
    * 2.正确高质量代码
    *   细节 完整，鲁棒性
    *   边界条件 特殊输入
    * 3.分析问题时思路清晰
    *   画图 分解 举例
    *   复杂问题可以通过画图，列举例子分析理清思路
    *   复杂问题分解成子问题
    *   通过具体的例子找到抽象的规律
    * 4.优化时间效率和空间效率
    *   斐波那契数列优化从O(n多次方) => O(n)
    * 5.学习沟通思维能力
*/

/**
 * 字符串转整数
 * 代码鲁棒性 边界条件
 * 
 * 需要注意的地方：
 * (1)非数字字符
 * (2)正负号
 * (3)不能转成整数时
 */
function StrToInt(numParam) {
    // 参数类型 非数字
    if (typeof num !== 'string') new Error();
    // 正负号
    // 最大正整数 最小负整数溢出

    var num = numParam;
    var demicalIndex = num.indexOf('.');
    var bDemical = demicalIndex > -1;

    // 参数预处理
    if (bDemical) { // 小数字符串
        num = numParam.subString(0, demicalIndex);
    } else { // 整数字符串
        // do noting
    }

    for (let i = 0; i < numParam.length;) {
        // string to number
    } 
}

/**
 * 求链表倒数第K个节点
 * 代码鲁棒性 边界条件
 * 思路：用两个指针 第一个先走K - 1(倒数第K是第（n-K）+1步 总数减去K是剩余，+1步是节点所在  = n - (K - 1))步，
 * 之后二者一起走，第一个走到最后时，第二个在倒数第K
 * 
 * 需要注意的地方：
 * （1）判断传入链表是不是空指针 k是不是 = 0
 * （2）链表节点数不能小于K
 */
function FindKthToTail(pListHead, k) { /** ListNode number */
    if (pListHead === null || k === 0) return null

    var pAHead = pListHead
    var pBehind = pListHead

    for (let i = 0; i < k - 1; i ++) {
       if (pAHead.next()) {
          pAHead = pAHead.next()
       } else {
          return null
       }
    }

    while(pAHead.next()) {
        pAHead = pAHead.next()
        pBehind = pBehind.next()
    }

    return pBehind
}

/**
 * 单例模式 p35
 * 1.饿汉式
 * 2.懒汉式
 *  （1）多线程存在问题
 *  （2）重复加锁 耗费性能
 *  （3）双重判断 不会重复加锁
 *  （4）利用静态构造函数只调用一次特点
 */

/**
 * 数组中重复的数字
 * 长度为n的数组所有数字在0到n-1范围内，某些数字重复，找出任意重复数字
 * 思路：
 *      1.扫描排序后的数组 排序O(nlogn)   n * nlogn
 *      2.构建HashMap 时间复杂度O(n) 空间O(n)
 *      2.遍历数组内容，数组数字数值和index一致（稀疏数组）
 *          如果数组数值不是当前index,交换变量到找到合适的数值
 *          如果发现index已经有数值，发现重复
 *          时间复杂度O(n)
 *          空间复杂度O(1)
 */
function duplicate1() { // 排序解法

}
function duplicate1(dArr) { // HashMap解法
    var hashTable = {}
    for (let i = 0; i < dArr.length; i++) {
        if (hashTable[dArr[i]]) {
            return true
        }
        hashTable[dArr[i]] = dArr[i]
    }    
}
function duplicate1(dArr) { // 修改数组解法 不引入第三方变量
    if (!dArr || !dArr.length) return false

    for (let i = 0; i < dArr.length; i ++) {
        if (dArr[i] < 0 || dArr[i] > dArr.length - 1) return false
    }

    for (let j = 0; j < dArr.length; j ++) {
        while(dArr[j] !== j) {
            if (dArr[dArr[j]] === dArr[j]) { // 发现当前数值已经存在
                return true
            }

            var temp = dArr[j]
            dArr[j] = dArr[dArr[j]]
            dArr[j] = temp
        }
    }

    return false
}

/**
 * 数组中重复的数字
 * 长度为n+1的数组所有数字在0到n-1范围内，某些数字重复，找出任意重复数字。不能修改原有数组
 * 思路：
 *      1.构建HashMap/Array 时间复杂度O(n) 空间O(n)
 *      2.二分
 */


/**
 * 二维数组，每一行按照从左到右递增排序，每一列按照从上到下递增排序。
 * 完成一个函数，输入一个整数，判断二维数组中是否含有该整数
 * 
 * eg: 查找7 
 * 1    2   8   9
 * 2    4   9   12
 * 4    7   10  13
 * 6    8   11  15
 * 
 * 思路：从右上角开始 剔除不符合范围的列 再从右上角开始 剔除不符合范围的行
 *
 * @param {*} matrix 二维数组
 * @param {*} number 查找的数
 * @param {*} rows   总行数
 * @param {*} cols   总列数
 */
function find(matrix, number, rows, cols) {
    var found = false

    if (matrix && rows > 0 && cols > 0) {
        var row = 0
        var col = cols - 1
        while(row < rows && col > 0) {
            if (number === matrix[row][col]) {
                found = true
            } else if(number > matrix[row][col]) { // 右上角
                col --
            } else { // number小于右上角，开始查行
                row --
            }
        }
    }

    return found
}

/**
 * 替换空格：实现一个函数，字符串中每个空格替换成'%20'
 * 
 * 思路：
 *    1.遍历字符串，遇到空格替换
 *         字符串内容后移，复杂度n,总体复杂度O(n2)
 *    2.从尾到头
 *      定义两个index指针index1 index2
 *      遍历字符串 计算出空格数量 新的字符串长度的 原始长度 + 空格数 * 2
 *      index分别从新字符串末尾和旧字符串末尾开始遍历
 *      从后往前遍历字符串，如果有空格，替换成'%20', index一个移动3个单位 一个移动1个单位
 *      如果是空格 添加'%20' 否则添加正常index所在字符串
 */
function replaceBlank(str) {
    if (!str || !str.length) return str

    var blanckNum = 0
    for (var i = 0; i < str.length; i ++) {
        blanckNum ++
    }

    if (!blanckNum) return str
    var newIndex = str.length + blanckNum * 2 - 1

    for (var i = 0; i < str.length; i++) {
        if(isBlank(str)) {
            str[newIndex --] = '0'
            str[newIndex --] = '2'
            str[newIndex --] = '%'
        } else {
            str[newIndex] = str[i]
        }
    }

    return str
}

/**
 * 类似题目：
 * 两个数组A1 A2 内存在A1末尾有足够多空间容纳A2，把A2所有数字插入到A1中，并且所有数字排序
 * 
 * 思路：
 *      从头到尾遍历会造成移动多个数字O(n2)
 *      可以从尾到头开始比较二者 在合适的位置插入
 */