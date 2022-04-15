function find_average(array) {
    if (array === null || array.length < 1) {
      return 0
    } else {
      return (array.reduce((a,b) => a + b, 0) / array.length)
    }
  }