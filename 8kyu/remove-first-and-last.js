// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// STRINGSFUNDAMENTALS


//my solution
function removeChar(str){
    //You got this!
   let string = str.split("")
   string.shift();
   string.pop();
   
     return string.join("")
   };
   