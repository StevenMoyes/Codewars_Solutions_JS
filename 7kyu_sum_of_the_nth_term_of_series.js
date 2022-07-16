function SeriesSum(n) {
    let result = 0
    let denom = 1
    
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        result = 1
      } else {
        denom += 3
        result = result + (1/denom)
      }
    } return result.toFixed(2)
  }