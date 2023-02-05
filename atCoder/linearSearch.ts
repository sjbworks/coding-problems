'use strict'
const LinearSearch = (args: string) => {
  const input = args.trim().split('\n')
  const N = Number(input[0].split(' ')[0])
  const K = Number(input[0].split(' ')[1])
  const A = input[1].split(' ').map((n: any) => Number(n))

  console.log(A.some((e) => e === K))
}

LinearSearch(require('fs').readFileSync('/dev/stdin', 'utf8'))
