// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

function someArray(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
someArray([1, "Hello", 8, 44]);
