// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


//My Solution
function digitize(n) {
    //code here
    //goal write a function that takes in a number and returns array of all digits in the array in reverse.
    //convert n to a string. 
    //split the string into and array
    //reverse the array
    //convert array of strings to numbers
    let stringArray = n.toString().split('').reverse()
    let digitArray = stringArray.map(Number)
    
    console.log(digitArray)
    return digitArray
  }