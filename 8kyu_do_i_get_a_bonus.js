function bonusTime(salary, bonus) {
    let amount = 0;
    if (bonus === true) {
      amount = salary * 10
    } else {
      amount = salary
    } return `£${amount}`
  }