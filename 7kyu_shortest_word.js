function findShort(s){
    let arrayWords = s.split(' ')
    let arrayLengths = []
    
    arrayWords.forEach((word) => {
      arrayLengths.push(word.length)
    })
    arrayLengths.sort((a,b) => a-b)
    return arrayLengths[0]
  }