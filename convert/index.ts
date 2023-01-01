export const convert = (s: string, numRows: number): string => {
  if (numRows < 2) return s;
  let zig: string[] = [];
  let cycle = numRows * 2 - 2;
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; j + i < s.length; i += cycle) {
      zig.push(s.charAt(i + j));
      if (j !== 0 && j !== numRows - 1) {
        zig.push(s.charAt(i + cycle - j));
      }
    }
  }
  return zig.join("");
};
