function sumDigits(number) {
  number = Math.abs(number)
  let string = number.toString()
  let result = 0
  
  if (number < 0) {
    number = 0 + number
  }
  
  for (let i = 0; i < string.length; i++) {
    result += Number(string[i])
  } return result
}
