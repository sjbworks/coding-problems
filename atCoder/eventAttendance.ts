// correct answer
const eventAttendance = (args: string) => {
  const input = args.trim().split('\n')
  const [d, n, ...l] = input
  const arrayL = l.map((e) => e.split(' ').map((e) => Number(e)))
  let attendance = Array(Number(d)).fill(0)
  for (let i = 0; i < arrayL.length; i++) {
    attendance[arrayL[i][0] - 1] += 1
    if (arrayL[i][1] !== Number(d)) attendance[arrayL[i][1]] -= 1
  }
  let tmp = 0
  const result = attendance.map((e, i) => {
    tmp += e
    return tmp
  })
  console.log(attendance)
  result.map((e) => console.log(e))
}

eventAttendance(require('fs').readFileSync('/dev/stdin', 'utf8'))

// TLE
const eventAttendanceTLE = (args: string) => {
  const input = args.trim().split('\n')
  const [d, n, ...l] = input
  const arrayL = l.map((e) => e.split(' ').map((e) => Number(e)))
  let attendance = Array(Number(d)).fill(0)
  for (let i = 0; i < arrayL.length; i++) {
    let start = arrayL[i][0]
    while (start <= arrayL[i][1]) {
      attendance[start - 1] += 1
      start++
    }
  }
  attendance.map((e) => console.log(e))
}

eventAttendanceTLE(require('fs').readFileSync('/dev/stdin', 'utf8'))
