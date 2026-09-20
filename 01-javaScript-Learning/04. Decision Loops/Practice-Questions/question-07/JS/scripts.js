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