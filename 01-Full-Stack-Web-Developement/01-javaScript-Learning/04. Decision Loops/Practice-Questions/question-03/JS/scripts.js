// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

function singleNumber1(n){
    let sum =0;
      for(let i=n+1; i<=n+10; i++){
        sum+=i;
      }
      return sum;
}

console.log(`the sum of the next 10 number is ${singleNumber1(7)}`);