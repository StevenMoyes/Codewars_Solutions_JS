function index(array, n){
    for (let i = 0; i < array.length; i++) {
      if (n >= array.length) {
        return -1
      } else if (i === n) {
        return Math.pow(array[i], n)
      }
    }
  }