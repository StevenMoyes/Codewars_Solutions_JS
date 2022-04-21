function sumMix(x){
    let numberArray = x.map(Number)
    return numberArray.reduce((a,b) => a+b, 0)
  }