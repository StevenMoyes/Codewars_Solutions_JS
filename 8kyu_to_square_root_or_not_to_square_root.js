function squareOrSquareRoot(array) {
    let result = []
    
    for (let i = 0; i < array.length; i++) {
      if (Math.sqrt(array[i]) % 1 === 0) {
        result.push(Math.sqrt(array[i]))
      } else {
        result.push(array[i] * array[i])
      }
    } return result
  }