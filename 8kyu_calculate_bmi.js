function bmi(weight, height) {
    let conversion = weight / (height * height);
        if (conversion <= 18.5) {
          return "Underweight"
        } else if (conversion <= 25.0) {
          return "Normal"
        } else if (conversion <= 30.0) {
          return "Overweight"
        } else if (conversion > 30) {
          return "Obese"
        }
  }