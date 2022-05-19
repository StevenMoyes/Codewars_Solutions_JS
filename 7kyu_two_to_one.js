function longest(s1, s2) {
    let result = [];
    let fullArray = (s1 + s2).split('').sort()
    
    for (let i = 0; i <= fullArray.length; i++) {
        if (!result.includes(fullArray[i]) ) {
              result.push(fullArray[i]);
        }
    } return result.join('');
}