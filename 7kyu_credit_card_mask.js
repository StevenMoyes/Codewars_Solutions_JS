function maskify(cc) {
    let result = []
    
    if (cc.length < 5) {
      return cc
    } else {
      for (let i = 0; i < cc.length-4; i++) {
        result.push('#')
      }
    } return result.join('') + cc.substring(cc.length-4)
  }
  