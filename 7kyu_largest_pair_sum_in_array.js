function largestPairSum (numbers) {
  return numbers.sort((a,b) => a-b)[numbers.length-2] + numbers.sort((a,b) => a-b)[numbers.length - 1]
}