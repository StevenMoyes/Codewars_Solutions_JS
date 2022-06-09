function addLength(str) {
    let result = []
    let array = str.split(' ')
    
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] +' '+ array[i].length)
    } return result
  }
  