String.prototype.toJadenCase = function () {
    let result = []
    let lowerCaseArray = this.toLowerCase().split(' ')
    
    for (let i = 0; i < lowerCaseArray.length; i++) {
      let word = lowerCaseArray[i]
      result.push(word[0].toUpperCase() + word.slice(1))
    } return result.join(' ')
  };