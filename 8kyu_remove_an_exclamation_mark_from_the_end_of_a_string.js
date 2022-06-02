function remove (string) {
  for (let i = 0; i < string.length; i++) {
    if (string[string.length-1] === '!') {
      return string.substring(0, string.length-1)
    } else {
      return string
    }
  }
}