function evaluate(unknown, k) {
  if (unknown === 'x') return k;
  const known = `${k}`
  if (unknown.length !== known.length) return null;
  for (let i in known) {
    if(known[i] !== unknown[i]) return known[i]
  }
  return null;
}
const Oposite = {
  '+': (a, b) => { return a - b },
  '-': (a, b) => { return a + b },
  '*': (a, b) => { return a / b },
  '/': (a, b) => { return a * b },
}
const Onward = {
  '+': (a, b) => { return a - b },
  '-': (a, b) => { return b - a },
  '*': (a, b) => { return a / b },
  '/': (a, b) => { return b / a },
}
const Normal = {
  '+': (a, b) => { return a + b },
  '-': (a, b) => { return a - b },
  '*': (a, b) => { return a * b },
  '/': (a, b) => { return a / b },
}

function MissingDigit(str) { 
  const blocks = str.split(' ')
  // if 1st operator contains x
  if (blocks[0].includes('x')) {
    return evaluate(blocks[0],
      Oposite[blocks[1]](
        parseInt(blocks[4]), 
        parseInt(blocks[2])
      )
    )
  }
  // if 2nd operator contains x
  if (blocks[2].includes('x')) {
    return evaluate(blocks[2],
      Onward[blocks[1]](
        parseInt(blocks[4]), 
        parseInt(blocks[0])
      )
    )
  }

  return evaluate(blocks[4],
    Normal[blocks[1]](
      parseInt(blocks[0]),
      parseInt(blocks[2])
    )
  )

}
   
// keep this function call here 
console.log(MissingDigit(readline()));