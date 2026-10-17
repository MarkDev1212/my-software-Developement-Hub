// Question 08 (Count vowels)
// Write a function that takes a string and returns the number of vowels (a, e, i, o, u) it contains,
// case-insensitive.
// ■ Test 1: countVowels("JavaScript") returns 3
// ■ Test 2: countVowels("Rhythm") returns 0

function countVowels(str){
    let splited = str.split("");
    let count="";
    for(let i=0; i<splited.length; i++){
         if(splited[i] === "a"){
           count+=i
         }
         else if(splited[i] === "e"){
          count+=i
         }
         else if(splited[i] === "i"){
             count+=i

         }
         else if(splited[i] === "o"){
             count+=i

         }
         else if(splited[i] === "u"){
             count+=i

         }

       

    }
    return count.length;
}
console.log(countVowels("JavaScript"));
console.log(countVowels("Rhythm"));

