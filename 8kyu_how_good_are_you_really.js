function betterThanAverage(classPoints, yourPoints) {
    let classAverage = (classPoints.reduce((a,b) => a+b, 0) + yourPoints) / (classPoints.length +1)
    if (yourPoints > classAverage) {
      return true
    } else {
      return false
    }
  }
  