function isPalindrome(line) {
    let forward = String(line)
    let backward = forward.split('').reverse().join('')
    
    if (forward === backward) {
      return true
    } else {
      return false
    }
  }