// alert("hello world.")
// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

// function getOnlyEvens(arr){
//       let anotherArray =[];
//       for(let i=0; i<arr.length; i++){
//          if(arr[i]%2===0 && i%2===0){
//             anotherArray.push(arr[i]);
//             // anotherArray+=arr[i];
            
//          }

//       }
//       return "[" + anotherArray +"]";
// }
// console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));