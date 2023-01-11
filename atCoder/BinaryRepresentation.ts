const binaryRepresentation = (args: string) => {
  const input = Number(args.trim())
  console.log(input.toString(2).padStart(10, '0'))
}

binaryRepresentation(require('fs').readFileSync('/dev/stdin', 'utf8'))
