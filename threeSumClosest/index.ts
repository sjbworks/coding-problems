// Runtime 3067 ms
export const threeSumClosest = (nums: number[], target: number): number => {
  nums.sort((a, b) => b - a)
  let result: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) break
      for (let k = 0; k < nums.length; k++) {
        if (j === k) break
        let sum = nums[i] + nums[j] + nums[k]
        if (sum === target) {
          return target
        } else {
          const abs = Math.abs(sum - target)
          if (!result[0] || result[0][0] > abs) {
            result.splice(0, 1)
            result.push([Math.abs(sum - target), sum])
          }
        }
      }
    }
  }
  return result ? result[0][1] : 0
}

// Better Answer
// Runtime 84 ms
function betterThreeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let result = Infinity
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum
      }
      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}
