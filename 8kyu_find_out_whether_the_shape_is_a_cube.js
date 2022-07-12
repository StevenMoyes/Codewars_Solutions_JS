var cubeChecker = function(volume, side){
  let result = side * side * side
  
  if (volume < 1 || side < 1) {
    return false
  } else {
    return volume === result
  }
};