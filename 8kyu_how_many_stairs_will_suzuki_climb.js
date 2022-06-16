function stairsIn20(s){
  let sunday = s[0].reduce((a,b) => a+b)
  let monday = s[1].reduce((a,b) => a+b)
  let tuesday = s[2].reduce((a,b) => a+b)
  let wednesday = s[3].reduce((a,b) => a+b)
  let thursday = s[4].reduce((a,b) => a+b)
  let friday = s[5].reduce((a,b) => a+b)
  let saturday = s[6].reduce((a,b) => a+b)
  
  return (sunday + monday + tuesday + wednesday + thursday + friday + saturday) * 20
}