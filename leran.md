template下ref不加.value 因为template会自动给你加
tsx下return div ref值要加.value

css modules   scss   安装sass  1.19.11

问题：svg不展示 暂时换成png




---
- 新增学习数据结构

2022年12月5日
1. 217.存在重复元素  使用排序 使用hash map或者set
a= [1,2,3,1]
a.sort((a,b)=>a-b)   升序   [1, 1, 2, 3]
a.sort((a,b)=>b-a)   降序   [3, 2, 1, 1]
2. 53.最大子数组和  **动态规划** 没做出来 看了答案也不是很懂   

2022年12月6日
1. 1.两数之和  双重for循环      map  (这个是看答案的)

2. 88.合并两个有序数组  合并排序    双指针 这个不会

2022年12月7日
1. 350.两个数组的交集 II
2. 121.买卖股票的最佳时机   使用循环超时  动态规划可解
   var s = 0
    for(let i=0;i<prices.length;i++){
        if(Math.max(...prices.slice(i)) === prices[i]) continue
        for(let j=i;j<prices.length;j++){
             if(prices[j]-prices[i]>s){
                 s  = prices[j]-prices[i]
             }
        }
    }
    return s  
    超时  
2022年12月8日
摆烂

2022年12月9日
摆烂

2022年12月10日
1. 566.重塑矩阵
2. 118.杨辉三角
3. 387.字符串中的第一个唯一字符
4. 383.赎金信
5. 242.有效的字母异位词

2022年12月11日  不懂链表 
1. 141.环形链表  直接看的题解 使用map   使用快慢指针 不会
2. 21.合并两个有序链表 直接看的题解  使用递归  还能使用迭代 不懂
3. 203.移除链表元素  直接看的题解 使用递归