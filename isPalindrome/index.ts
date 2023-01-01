export const isPalindrome = (x: number): boolean => {
  if (x < 0) false;
  return x === Number(String(x).split("").reverse().join("")) ? true : false;
};
