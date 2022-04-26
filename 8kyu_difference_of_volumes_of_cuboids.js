function findDifference(a, b) {
    let resultA = a[0] * a[1] * a[2]
    let resultB = b[0] * b[1] * b[2]
    
    if (resultA > resultB) {
      return resultA - resultB
    } else {
      return resultB - resultA
    }
  }