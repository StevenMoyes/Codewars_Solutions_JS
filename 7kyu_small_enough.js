function smallEnough(a, limit){
    let result = []
    
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= limit) {
        result.push(a[i])
      }
    } if (result.length === a.length) {
      return true
    } else {
      return false
    }
  }