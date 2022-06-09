function elevator(left, right, call){
    let leftDiff = Math.abs(call - left)
    let rightDiff = Math.abs(call - right)
    
    if (leftDiff == rightDiff) {
      return 'right'
    } else if (leftDiff < rightDiff) {
      return 'left'
    } else {
      return 'right'
    }
  }