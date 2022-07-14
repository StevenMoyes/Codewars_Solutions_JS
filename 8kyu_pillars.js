function pillars(numPill, dist, width) {
    dist = dist * 100
    
    if (numPill < 2) {
      return 0
    } else {
      return ((numPill - 1) * dist) + ((numPill - 2) * width)
    }
  }