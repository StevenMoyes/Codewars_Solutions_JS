function abbrevName(name){
    let abName = name.split(' ')
    return (abName[0][0].toUpperCase() + '.' + abName[1][0].toUpperCase())
  }