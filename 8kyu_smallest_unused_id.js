function nextId(ids){
    let n = 0
    
    while (ids.includes(n))
      n++
    return n
  }