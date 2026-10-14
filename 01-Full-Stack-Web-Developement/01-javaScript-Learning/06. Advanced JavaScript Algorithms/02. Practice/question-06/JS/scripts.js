// Question 8 (Digit sum)
// Write a function that takes a positive integer and returns the sum of its digits.
// ■ Test 1: sumDigits(1234) returns 10
// ■ Test 2: sumDigits(9) returns 9
// ■ Test 3: sumDigits(1000) returns 1


// 1. understand the problem
//     -the question is as to print the sume of the number but with in index.

// 2.sudo code
  
//   -define a function sumDigits and take a number as an argument 
//   -change the number to the string using toString() method
//   -split the string to array using the split("") method 
//   using for loop sume the number using index 


   function sumDigits(num){
      
       let numbers=num.toString().split("");
                 let sum = 0;
              for(let i=0; i<numbers.length; i++){
                 sum+=Number(numbers[i]);
                
              }
               
              return sum

   }
   console.log(sumDigits(123));