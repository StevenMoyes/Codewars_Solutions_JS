function warnTheSheep(queue) {
    let position = (queue.length - 1) - queue.indexOf('wolf')
    
    if ((queue.indexOf('wolf') + 1) === queue.length) {
      return 'Pls go away and stop eating my sheep'
    } else {
      return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
    }
  
  }