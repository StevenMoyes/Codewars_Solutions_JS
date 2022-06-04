function squareArea(A){
    let circumference = A*4
    let radius = (circumference / Math.PI) / 2
    let result = radius * radius
    return Number(result.toFixed(2))
  }