// Question 05 (Palindrome check)
// Write a function that takes a string and returns true if it reads the same forwards and backwards (ignoring
// case), and false otherwise.
// ■ Test 1: isPalindrome("level") returns true
// ■ Test 2: isPalindrome("Racecar") returns true
// ■ Test 3: isPalindrome("hello") returns false



       //sudo code
// 1. first understand the problem 
//     palindrom is two numbers have same meaning to read the text 


// 2. sudo code :-
//     -define the function isPalendrom that take string value as argument;
//     -  change the value to uppercase or lowercase to check the spaling error
//     -  reverse the value using the reverse() function 
//     -  check the value exactlly equal to the revrse value using if conditon


//3. code 

function isPalindrome(values){
       let currentValue=values.toUpperCase();
       let reverseValue = currentValue.split("").reverse().join("");
       if(currentValue === reverseValue){
        console.log("true");
       }
       else{
        console.log("false");
       }
}

isPalindrome("level");
isPalindrome("Racecar");
isPalindrome("hello");
isPalindrome("abebe")
