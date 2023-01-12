const howManyGuests = (args: string) => {
  const input = args.trim().split('\n')
  const inputArray = input.map((e) => e.split(' ')) // Number(input.split(' ')[0])
  const [_, a, ...l] = inputArray
  let tmp = 0
  const audience = a.map((e, i) => {
    // if(i > 0) {
    tmp += Number(e)
    // console.log(tmp)
    return tmp
  })
  console.log(audience)
  for (let i = 0; i < l.length; i++) {
    // console.log('li',Number(l[i][1]),'aud',audience[Number(l[i][1])])
    // console.log('li',Number(l[i][0]),'aud',audience[Number(l[i][0])])
    console.log(audience[Number(l[i][1])] - audience[Number(l[i][0]) - 1])
  }
  // console.log(n, q, a, l)
}

// howManyGuests('10 5\n8 6 9 1 2 1 10 100 1000 10000\n2 3\n1 4\n3 9\n6 8\n1 10')
howManyGuests('15 3\n62 65 41 13 20 11 18 44 53 12 18 17 14 10 39\n4 13\n3 10\n2 15')

// console.log(twoCards('5 53\n10 20 30 40 50\n1 2 3 4 5'))
