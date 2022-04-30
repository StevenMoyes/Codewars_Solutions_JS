function highAndLow(numbers){
    let sortedArray = numbers.split(' ').sort((a,b) => a-b)
    let low = sortedArray[0];
    let high = sortedArray[sortedArray.length-1]
    return high + ' ' + low
  }