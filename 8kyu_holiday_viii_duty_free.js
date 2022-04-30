function dutyFree(normPrice, discount, hol){
    let savings = normPrice * discount;
    return Math.floor((hol/savings)*100)
  }