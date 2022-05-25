function remainder(n, m){
  let array = [n, m]
  let sorted = array.sort((a,b) => a-b)
  
  return sorted[1] % sorted[0]
}