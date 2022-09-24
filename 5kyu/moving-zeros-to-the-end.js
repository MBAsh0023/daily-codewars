// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



//my solution
function moveZeros(arr) {
    //function takes in an array and moves the zero to the end of the array
    //create a variable for new array all other than 0
    const otherArray = []
    // create a variable for zero in array
    const zerosArray = []
    // create result array
    const result = []
    // iterate over array if i does not equal zero add to array if it does add to zero array
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === 0){
        zerosArray.push(arr[i])
      }else{
        otherArray.push(arr[i])
      }
    }
    return otherArray.concat(zerosArray)
  }