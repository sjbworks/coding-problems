export const maxArea = (height: number[]): number => {
  const { length } = height;
  let left = 0;
  let right = length - 1;
  let max = 0;

  while (left < right) {
    const x = right - left;
    const y = height[height[left] < height[right] ? left++ : right--];

    const res = x * y;

    if (res > max) max = res;
  }

  return max;
};
