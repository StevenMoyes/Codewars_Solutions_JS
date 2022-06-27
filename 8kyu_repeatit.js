var repeatIt = function(str, n) {
    if (typeof str != 'string') {
      return 'Not a string'
    } else {
      return str.repeat(n)
    }
  }