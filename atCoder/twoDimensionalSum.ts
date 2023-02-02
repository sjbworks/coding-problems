const twoDimensionalSum = (args: string) => {
  const input = args.trim().split('\n')
  const [h, w] = input[0].split(' ').map(Number)
  const x = input.slice(1, h + 1).map((e) => e.split(' ').map(Number))
  const q = +input[h + 1]
  const a = input.slice(h + 2).map((line) => line.split(' ').map(Number))
  let sums = [...Array(h + 1)].map(() => Array(w + 1).fill(0))
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      sums[i][j] = sums[i][j - 1] + x[i - 1][j - 1]
    }
  }
  for (let i = 1; i <= w; i++) {
    for (let j = 1; j <= h; j++) {
      sums[j][i] += sums[j - 1][i]
    }
  }
  for (let i = 0; i < q; i++) {
    let [A, B, C, D] = a[i]
    console.log(sums[C][D] - sums[A - 1][D] - sums[C][B - 1] + sums[A - 1][B - 1])
  }
}

twoDimensionalSum(require('fs').readFileSync('/dev/stdin', 'utf8'))

const twoDimensionalSumTest = (args: string) => {
  const input = args.trim().split('\n')
  const [h, w] = input[0]
  let arrayX: number[][] = []
  for (let i = 0; i < Number(w); i++) {
    const tmp = input[i + 1].split(' ').map(Number)
    arrayX.push(tmp)
  }
  const [q] = input[Number(w) + 1]
  let arrayQ: number[][] = []
  for (let i = 0; i < Number(w); i++) {
    const tmp = input[i + 1].split(' ').map(Number)
    arrayQ.push(tmp)
  }
  // let tmp = 0
  // const audience = a.map((e, i) => {
  //   tmp += Number(e)
  //   return tmp
  // })

  // for (let i = 0; i < l.length; i++) {
  //   const right = Number(l[i][0]) - 2 < 0 ? 0 : audience[Number(l[i][0]) - 2]
  //   console.log(audience[Number(l[i][1]) - 1] - right)
  // }
}

howManyGuests(require('fs').readFileSync('/dev/stdin', 'utf8'))
