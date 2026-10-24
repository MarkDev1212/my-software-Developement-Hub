// Questions on built in JavaScript methods
// ***********************************
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
//  Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
    
 let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

function arr(sampleArray){
          sampleArray.pop();
          
          sampleArray.push(32)
          return sampleArray;
}

console.log(arr(sampleArray));