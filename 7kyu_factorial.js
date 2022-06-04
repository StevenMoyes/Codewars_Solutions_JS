function factorial(n) {
    let result = 1
    
    if (n < 0 || n > 12) {
      throw new RangeError('Range must be between 0 and 12')
    } else if (n === 0) {
      return 1
    } else {
      for (let i = 1; i <= n; i++) {
        result *= i
      }
    } return result
  }