function noOdds( values ){
    let result = []
    
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        result.push(values[i])
      }
    } return result
  }