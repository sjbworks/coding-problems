// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

export const romanToInt = (s: string): number => {
  const romans = ['M', 'CM', 'CD', 'D', 'C', 'XC', 'XL', 'L', 'X', 'IX', 'IV', 'V', 'I']
  const values = [1000, 900, 400, 500, 100, 90, 40, 50, 10, 9, 4, 5, 1]
  let char = s
  let result = 0
  let copyRomans = [...romans]
  for (let i = 0; i <= romans.length; i++) {
    let num = 0
    copyRomans.shift()
    while (num < char.length + 2) {
      num++
      if (char.slice(0, 2).includes(romans[i]) && copyRomans?.filter((e) => e === char.slice(0, 2)).length < 1) {
        if (char.includes(romans[i])) {
          result += values[i]
          char = char.slice(romans[i].length)
        }
        if (i === romans.length - 1 && 0 < char.length) {
          i -= char.length
        }
      }
    }
  }
  return result
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('MCMXCIV')) // 1994
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('DCXXI')) // 621
console.log(romanToInt('MMCCCXCIX')) // 2399
console.log(romanToInt('MDLXX')) // 1570
console.log(romanToInt('MMMCDXXIX')) // 3429
console.log(romanToInt('MMMCXXX')) // 3130

// BEST ANSWER
// https://leetcode.com/problems/roman-to-integer/solutions/2706813/js-hash-table-with-exlanation/?page=2
