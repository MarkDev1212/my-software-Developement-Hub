
// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

function singleNumber(n){
      for(let i=n+1; i<=n+5; i++){
        console.log(i);
      }
}
singleNumber(7);

