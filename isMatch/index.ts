export const isMatch = (s: string, p: string): boolean => {
  return new RegExp(`^${p}$`).test(s);
};
