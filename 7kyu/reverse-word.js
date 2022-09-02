// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//my solution
function reverseWords(str) {
    // Go for it
    //write a function that takes a string and reverse each work
    //split the string into an array of word
    let words = str.split(" ")
    console.log(words)
    //reverse each word in the array
    let reverseWords =  words.map(word => word.split('').reverse().join(''))
    
    console.log(reverseWords)
    //join the word array into a string
    return reverseWords.join(" ")
}