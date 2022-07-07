function f(n){
    let result = 0
    if (typeof n === 'string') {
      return false
    } else if (typeof n === null) {
      return false
    } else if (n % 1 != 0) {
      return false
    } else if (n < 1) {
      return false
    } else {
      for (let i = 1; i <= n; i++) {
        result += i
      } 
    } return result
  };