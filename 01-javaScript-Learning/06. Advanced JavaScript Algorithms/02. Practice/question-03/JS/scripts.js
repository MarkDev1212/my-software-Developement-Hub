// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function returnFactorial(x){
         let factorial=1;
         for(let i=1; i<=x; i++){
            factorial*=i;
         }
         // if (factorial===0 || factorial===1){
         //    return 1;
         // }
         return `the factorial of ${x} is ${factorial}`;
}
console.log(returnFactorial(5));
console.log(returnFactorial(6));
console.log(returnFactorial(0));
