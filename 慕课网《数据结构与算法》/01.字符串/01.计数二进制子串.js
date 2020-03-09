/**
 * Created by MonTage_fz on 2020/3/9
 */
// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
// 并且这些子字符串中的所有0和所有1都是组合在一起的。
// 重复出现的子串要计算它们出现的次数。
// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 请注意，一些重复出现的子串要计算它们出现的次数。
// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

// 输入: "10101"
// 输出: 4
// 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。


// 000111必定有三个子串
// 00011必定有两个子串
// 0111必定有1个子串
// 以此类推, 每两组数据之间长度最短的值为子串的数量

let countBinarySubstrings = function (s) {
    let n = 0
    const arr = s.match(/1+|0+/g)
    for (let i = 0; i < arr.length - 1; i++) {
        n += Math.min(arr[i].length, arr[i + 1].length)
    }
    return n
}

countBinarySubstrings('00110011')
countBinarySubstrings('000111')
