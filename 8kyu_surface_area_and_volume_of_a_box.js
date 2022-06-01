function getSize(width, height, length) {
    let area = (2 * length * width) + (2 * length * height) + (2 * width * height)
    let volume = length * width * height
    
    return [area, volume]
  }
  