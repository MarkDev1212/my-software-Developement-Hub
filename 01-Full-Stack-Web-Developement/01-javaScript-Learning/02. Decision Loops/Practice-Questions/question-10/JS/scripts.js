// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});



 let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
function o(sampleArray){
         let d=sampleArray.sort(function(a, b){return a-b});
     console.log(d);
}
o(sampleArray);




