function getCount(str) {
    let count = 0;
    const vowels = [
      'a',
      'e',
      'i',
      'o',
      'u'
    ]
    
      for(let letter of str) {
        if (vowels.includes(letter)) {
          count++
        }
      } return count
    }