export const longestCommonPrefix = (strs: string[]): string => {
  const [head, ...others] = strs
  let result = ''
  for (let i = 0; i < head.length; i++) {
    const el = head.slice(i, i + 1)
    const b = others.every((ce) => {
      // console.log('ce:',ce,'ce-slice:',ce.slice(i,i+1),'el:',el)
      return ce.slice(i, i + 1) === el
    })
    if (b) {
      result = result.concat('', el)
    } else {
      break
    }
  }
  return result
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['cir', 'car']))

// ## 1つ目の配列の値[head]を1文字ずつループさせる
// - 1つ目を除く配列[others]をループさせて、[head]の`i`番目と[others]のそれぞれの値の`i`番目の文字が一致するか検査する
//   - othersの文字とheadの文字が全て一致していた時にtrueを返し、resultに値を入れる
//   - othersの文字とheadの文字のいずれかが違う場合ループ処理を終了する
//     - break処理のためにmapが使えないためforを使う
