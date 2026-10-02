// Question 17 (Prime check)
// Write a function that takes a positive integer and returns true if it is a prime number, and false otherwise.
// ■ Test 1: isPrime(7) returns true
// ■ Test 2: isPrime(15) returns false


function isPrime(num){
    let value=0;
    if(num === 0 || num === 1){
        return "false";
    }
    else{
        for(var i=2;  i <= (num/2+1); i++){
                     if(num%i === 0 ){
                         value+=num;
                     }
        }
        if(value){
            return "false";
        }
        else{
            return "true";
        }
    }
}

console.log(isPrime(7))
console.log(isPrime(15))