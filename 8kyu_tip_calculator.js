function calculateTip(amount, rating) {
  rating = rating.toLowerCase()
  
  if (rating === 'terrible') {
    return 0
  } else if (rating === 'poor') {
    return Math.ceil(amount * 0.05)
  } else if (rating === 'good') {
    return Math.ceil(amount * 0.1)
  } else if (rating === 'great') {
    return Math.ceil(amount * 0.15)
  } else if (rating === 'excellent') {
    return Math.ceil(amount * 0.2)
  } else {
    return 'Rating not recognised'
  }
}