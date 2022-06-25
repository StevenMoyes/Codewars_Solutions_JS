function differenceInAges(ages){
    let sorted = ages.sort((a,b) => a-b)
    let youngest = ages[0]
    let oldest = ages[ages.length-1]
    let difference = oldest - youngest
    return [youngest, oldest, difference]
  }
  