// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']




function solution(str){
    //goal - create a function that takes a given string and returns and array of letter pair. if array length not even add "_"
   // create variable for empty array
   let i = 0
   const array = []
   //if str length is odd add "_"
   if (str.length % 2 != 0) {
     str += "_"
   }
   console.log(str)
   // over array and create letter pair
   while(i < str.length){
     array.push(str[i] + str[i+1]);
     i += 2
   }
   return array
 }
 