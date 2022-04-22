function twiceAsOld(dadYearsOld, sonYearsOld) {
    let timeTo = ((dadYearsOld - sonYearsOld) * 2 - dadYearsOld)
    let timeSince = (sonYearsOld * 2) - dadYearsOld
    
    if (timeTo >= 0) {
      return timeTo
    } else {
      return timeSince
    }
  }