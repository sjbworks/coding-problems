const main = (args: string) => {
  const n = Number(args.trim().split('\n'))
  console.log(n * n)
}

console.log('oi')
console.log(main('2'))
// console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))
