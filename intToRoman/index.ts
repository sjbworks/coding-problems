export const intToRoman = (num: number): string => {
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res = "";
  for (let i = 0; i <= values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += romans[i];
    }
  }
  return res;
};

console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
