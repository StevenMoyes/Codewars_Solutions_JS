function whoIsPaying(name){
    let truncated = name[0]+name[1]
    
    if (name.length < 3) {
      return [name]
    } else {
      return [name, truncated]
    }
  }