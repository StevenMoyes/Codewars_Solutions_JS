function countPositivesSumNegatives(input) {
    let positive = 0
    let negative = 0
    
    if (input === null || input.length < 1) {
      return []
    } else {
      input.forEach((n) => n > 0 ? positive ++ : negative += n)
    } return [positive, negative]
}