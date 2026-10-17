
// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

function question8(arr){
       for(let i=0; i<arr.length; i++){
        if(i%2===0)
            console.log(arr[i]);
       }
}
question8([5, 6, 99, 8, 76, 4, 68, 44]);
question8([11, "sam", 3, 7, "car"]);