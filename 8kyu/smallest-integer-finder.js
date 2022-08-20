// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// FUNDAMENTALS

//my solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallestNum;
      
      for(let i = 0; i < args.length; i++){
        if(i === 0){
          smallestNum = args[i]
        }
        if (args[i] < smallestNum){
          smallestNum = args[i]
        }
      }
      return smallestNum
    }
  }