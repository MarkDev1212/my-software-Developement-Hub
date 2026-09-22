// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

function reverseCompare(a){
        let n=a.toString().split("");
           console.log(n);
            let reverse1=n.reverse();
             console.log(reverse1)
            let join1=reverse1.join("");
             console.log(join1);
            if(a>join1){
                return `ok`;
            }
            else{
                return `not ok`;
            }



    
}
console.log(reverseCompare(72));