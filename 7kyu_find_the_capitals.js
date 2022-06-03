var capitals = function (word) {
	let result = []
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      result.push(word.indexOf(word[i]))
    }
  } return result
};