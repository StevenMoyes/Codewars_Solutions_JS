function printerError(s) {
    let errorCount = 0
    let sLength = s.length
    
    const colorCodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
    
    for (let letter of s) {
      if (!colorCodes.includes(letter)) {
        errorCount++
      }
    } return `${errorCount}/${sLength}`
}