// Question 03: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.
   
   
function isEvens(num){
    let a=num.toString().split("");
    let n1=a.every((n2)=>Number(n2)%2===0)
    // console.log(n1);
    if(n1){
        console.log("1");
    }
    else{
        console.log("0")
    }
     
    
}
 isEvens(228866441);