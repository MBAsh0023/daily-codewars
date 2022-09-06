// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//my solution

function findAverage(array) {
    const sumArray = array.reduce((sum, currentValue) => {
      return sum + currentValue
    })
    if(array.length){
      return sumArray / array.length
    }else {
      return 0
    }
  }