// 中央値を求める
export const getMedian = (nums1: number[], nums2: number[]): number => {
  let mergedArray = [...nums1, ...nums2];
  const sorted = mergedArray.sort((a: number, b: number) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2.0
    : sorted[middle];
};

console.log(getMedian([1, 3], [2])); // 2
console.log(getMedian([3], [-2, -1])); // -1
