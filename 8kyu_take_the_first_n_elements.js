function take(arr, n) {
    let result = []
    
    if (arr.length == 0) {
      return []
    } else if (n > arr.length) {
      return arr
    } else {
      for (let i = 0; i < n; i++) {
        result.push(arr[i])
      }
    } return result
  }