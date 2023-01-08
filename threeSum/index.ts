const threeSum = (nums: number[]): number[][] => {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b)
  let result: number[][] = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let right = i + 1
    let last = nums.length - 1
    while (right < last) {
      const sum = nums[i] + nums[right] + nums[last]
      if (sum === 0) {
        result.push([nums[i], nums[right], nums[last]])
        while (nums[right] === nums[right + 1]) right++
        while (nums[last] === nums[last - 1]) last--
        right++
        last--
      } else if (sum > 0) {
        last--
      } else {
        right++
      }
    }
  }
  return result
}

// nums.length-2分ループする(先頭のnumを起点として、num[i]より右の２つの値を見るため)
// iが0より大きい 且つ nums[i] と nums[i-1]が同じときはすでに同じ数値を見ているので今回のループをskipして次のループに入る
// - nums[i]の右(right)と、numsの最後(last)の数を足す
//   right < last の状態の時ループする
//   - 合計値が0の場合
//     - resultにpushする
//     - right++, last-- する
//   - 合計値が0より大きい場合
//     - 値が大きいlastから1減らす
//   - 合計値が0より小さい場合
//     - 値が小さいrightに1を足す

// wrong example

const wrongThreeSum = (nums: number[]): number[][] => {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b)
  let result: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) break
      for (let k = 0; k < nums.length; k++) {
        if (j === k) break
        if (k > 0 && nums[k] === nums[k - 1]) continue
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return result
}
