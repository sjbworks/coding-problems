export const myAtoi = (s: string): number => {
  if (/(?=[^0-9])(?=[^\s])(?=[^\+])(?=[^\-])/.test(s[0])) return 0;
  const limit = 2147483648;
  const a = s.split(" ").filter((e) => e !== "");
  const v = Number(a[0]?.split(/(?=[^0-9])/)[0]);
  if (Number.isNaN(v)) return 0;
  return limit * -1 > v ? limit * -1 : v >= limit ? limit - 1 : v;
};
