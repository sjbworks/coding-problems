// 最長の回文箇所を取得する
// Time Limit Exceeded
// O(n^2)になっているのでデータ量に比例して計算量も増える
export const bruteForcePalindrome = (s: string): string => {
  if (s.length < 2) return s;
  let palindrome = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      if (j > i) {
        const str = s.substring(i, j);
        if (
          str === str.split("").reverse().join("") &&
          palindrome.length < str.length
        ) {
          palindrome = str;
        }
      }
    }
  }
  return palindrome;
};
