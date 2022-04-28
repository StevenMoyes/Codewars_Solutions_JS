function isPalindrome(x) {
    let lowercase = x.toLowerCase()
    let forward = lowercase
    let backward = lowercase.split('').reverse().join('')
    if (forward === backward) {
      return true
    } else {
      return false
    }
  }