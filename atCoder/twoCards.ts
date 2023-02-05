const twoCard = (args: string) => {
  const input = args.trim().split('\n')
  const [n, k] = [Number(input[0].split(' ')[0]), Number(input[0].split(' ')[1])]
  const [p, q] = [input[1].split(' ').map(Number), input[2].split(' ').map(Number)]
  let result = false
  for (let i = 0; i < n; i++) {
    if (p.some((e) => e + q[i] === k)) result = true
  }
  console.log(result ? 'Yes' : 'No')
}

twoCard(require('fs').readFileSync('/dev/stdin', 'utf8'))
