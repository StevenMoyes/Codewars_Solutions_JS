function squareDigits(num){
    let string = num.toString();
    let result = [];
    
    for (let i = 0; i < string.length; i++) {
      result.push(string[i] * string[i])
    } return Number(result.join(''))
  }