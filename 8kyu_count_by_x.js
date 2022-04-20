function countBy(x, n) {
    let array = []
    let end = n * x
    
    for (let i = x; i <= end; i++) {
      if (i % x === 0) {
        array.push(i)
      }
    } return array
  }