var findAverage = function (nums) {
    let a = nums.reduce((a,b) => a+b)
    return a / nums.length
  }