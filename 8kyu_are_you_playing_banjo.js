function areYouPlayingBanjo(name) {
    let nameLowerCase = name.toLowerCase()
    
    if (nameLowerCase[0] === 'r') {
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
  }