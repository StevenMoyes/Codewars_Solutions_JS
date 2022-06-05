function tripleTrouble(one, two, three){
    let array = [one, two, three]
    let result = []
    
    for (let i = 0; i < one.length; i++) {
      result.push(one[i], two[i], three[i])
    } return result.join('')
   }