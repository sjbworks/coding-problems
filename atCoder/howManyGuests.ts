const howManyGuests = (args: string) => {
  const input = args.trim().split('\n')
  const inputArray = input.map((e) => e.split(' '))
  const [_, a, ...l] = inputArray
  let tmp = 0
  const audience = a.map((e, i) => {
    tmp += Number(e)
    return tmp
  })

  for (let i = 0; i < l.length; i++) {
    const right = Number(l[i][0]) - 2 < 0 ? 0 : audience[Number(l[i][0]) - 2]
    console.log(audience[Number(l[i][1]) - 1] - right)
  }
}

howManyGuests(require('fs').readFileSync('/dev/stdin', 'utf8'))
