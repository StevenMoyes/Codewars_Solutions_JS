function bump(x){
    let array = x.split('')
    let count = 0
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'n') {
        count++
      }
    } if (count <= 15) {
      return "Woohoo!"
    } else {
      return 'Car Dead'
    }
  }