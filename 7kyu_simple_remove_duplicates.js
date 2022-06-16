function solve(arr) {
    let result = []
    let backwards = arr.reverse()
    
    for (let i = 0; i < backwards.length; i++) {
      if (!result.includes(backwards[i])) {
        result.push(backwards[i])
      }
    } return result.reverse()
  }