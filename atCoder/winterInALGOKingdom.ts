const winterInALGOKingdom = (args: string) => {
  const input = args.trim().split('\n')
  const [[h, w, n], ...ab] = args
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number))
  let resultArray = [...Array(h + 1)].map(() => Array(w + 1).fill(0))

  for (let i = 0; i < n; i++) {
    const [a, b, c, d] = ab[i]
    resultArray[a - 1][b - 1]++
    resultArray[c][d]++
    resultArray[a - 1][d]--
    resultArray[c][b - 1]--
  }
  // 横方向
  for (let i = 0; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      resultArray[i][j] += resultArray[i][j - 1]
    }
  }
  // 縦方向
  for (let i = 1; i <= h; i++) {
    for (let j = 0; j <= w; j++) {
      resultArray[i][j] += resultArray[i - 1][j]
    }
  }
  resultArray.pop()
  for (let i = 0; i < h; i++) {
    resultArray[i].pop()
  }
  console.log(resultArray.map((e) => e.join(' ')).join('\n'))
}

winterInALGOKingdom(require('fs').readFileSync('/dev/stdin', 'utf8'))
