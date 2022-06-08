function  calculateAge(birthYear, targetYear) {
  let result = targetYear - birthYear
  
  if (result === 0) {
    return 'You were born this very year!'
  } else if (result === 1) {
    return 'You are 1 year old.'
  } else if (result === -1) {
    return 'You will be born in 1 year.'
  } else if (result > 1) {
    return `You are ${result} years old.`
  } else if (result < -1) {
    return `You will be born in ${0-result} years.`
  }
}

