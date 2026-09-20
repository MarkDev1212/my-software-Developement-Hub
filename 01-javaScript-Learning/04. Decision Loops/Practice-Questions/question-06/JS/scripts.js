
// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test ca


function question6(arr){
          let sum = 0;
      for(let i=0; i<arr.length; i++){
             sum+=arr[i];
      }
      return sum;
}
console.log(question6([5, 6, 99, 8, 76, 4, 68, 44]));