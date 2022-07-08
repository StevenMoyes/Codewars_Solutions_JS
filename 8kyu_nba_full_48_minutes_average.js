function pointsPer48(ppg, mpg) {
  let average48 = (ppg / mpg) * 48
  if (mpg === 0) {
    return 0
  } else {
    return Number(average48.toFixed(1))
  }
}