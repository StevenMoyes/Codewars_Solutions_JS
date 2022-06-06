function usdcny(usd) {
    let conversionRate = 6.75
    let result = usd * conversionRate
    return `${result.toFixed(2)} Chinese Yuan`
  }