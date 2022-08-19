// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// STRINGSFUNDAMENTALS

//my solution
function getCount(str) {
    let vowelCount = 0
     const arr = str.split("");
    
    for(let i = 0; i< arr.length; i++){
      switch (arr[i]){
          case 'a':
          vowelCount++;
          break;
          case 'e':
          vowelCount++;
          break;
          case 'i':
          vowelCount++;
          break;
          case 'o':
          vowelCount++;
          break;
          case 'u':
          vowelCount++;
        
          
         
      }
    }
    return vowelCount;
  }