//alert("my javascript is connect successfully");

//start
//Question 1
//● Write a function that prints the first 10 integers on the console starting from the number 1 using
// JavaScript for loop

function number(n){
    for(let i=1; i<=n; i++){
        console.log(`number is ${i}`)
    }
}
number(10);

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




// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2


function question5(arr){
   console.log(arr.length);
  
}
question5( [1, "Hello", 8, 44]);
question5(["world", 13]);

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

// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

function question7(arr){
    let x;
    let y;
    let sum=0;
    let sum1=0;
    for(let i=0; i<arr.length; i++){
         if(arr[i]%2==1){
            x=arr[i];
             sum+=x;
            console.log(x);
            
         }
         else{
            y=arr[i]%2===0;
            y=arr[i];
             sum1+=y;
           console.log(y)
           
         }
        
        
    }
    console.log("sum = "+sum);
    console.log("sum1 = "+sum1);
    if(sum>sum1){
        var sub =sum-sum1;
    }
    else{
        var sub=sum1-sum;
    }
     
       
    return sub;

}
console.log(question7([1,2,3,4,5]));

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