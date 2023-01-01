// 回文を中央の文字から探索する
export const longestPalindrome = (s: string): string => {
  if (s.length < 2) return s;
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let length1 = expandAroundCenter(s, i, i);
    let length2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(length1, length2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return s.slice(Math.ceil(start), end + 1);
};

const expandAroundCenter = (s: string, left: number, right: number): number => {
  let l = left;
  let r = right;
  while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
    // if (s[l] !== s[r]) break;
    l--;
    r++;
  }
  return r - l - 1;
};
