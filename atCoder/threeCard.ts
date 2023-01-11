const threeCard = (args: string) => {
  const input = args.trim()
  const n = Number(input.split(' ')[0])
  const k = Number(input.split(' ')[1])
  let result = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (k - (i + j) <= n && k - (i + j) > 0) result++
    }
  }
  console.log(result)
}

threeCard(require('fs').readFileSync('/dev/stdin', 'utf8'))
