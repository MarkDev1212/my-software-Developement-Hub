// Question 10 (Capitalize words)
// Write a function that takes a sentence as a string and returns a new string with the first letter of each word
// capitalized.
// ■ Test 1: capitalizeWords("the quick brown fox") returns "The Quick Brown
// Fox"
// ■ Test 2: capitalizeWords("hello world") returns "Hello World"
    

function capitalizeWords(str){
      let a = str.split(" ");
    
          
          let c="";
          
         for(let i=0; i<a.length; i++){
            let  b=a[i].charAt(0).toUpperCase() + a[i].slice(1);
                    c= c+" "+b;    
             
            
         }
         

       return c;
} 
console.log(capitalizeWords("abeb kebede"));
console.log(capitalizeWords("the quick brown fox"));