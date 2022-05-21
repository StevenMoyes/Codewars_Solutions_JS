function oddOrEven(array) {
    if (array.length < 1) {
      return 'even'
    }
   
   let result = array.reduce((a,b) => a+b, 0)
   
   if (result % 2 === 0) {
     return 'even'
   } else {
     return 'odd'
   }
 }