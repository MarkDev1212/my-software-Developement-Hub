// Question 01  : Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.

function chackDivisible(low,high){
       for(let i=low; i<=high; i++){
        if(i%3===0){
            console.log(i+" div3");
        }
        // else{
        //     console.log(i+" not devisible by 3");
        // }
       }
}
chackDivisible(1,20)