function getSum( a,b ) {
    let count = 0;
    
    if (a < b) {
      for (; a <= b; a++) {
        count += a
      }
    } else if (a > b) {
      for (; a >= b; a--) {
        count += a
      }
    } else {
      count = a
    } return count
  }