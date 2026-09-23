// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

function checkMeera(n){
     for(let i=0; i<n.length; i++){
          
          for(let j=0; j<n.length; j++){
              
               
               if(n[i]===n[j]*2){
                    console.log( `i am not a meera Array`);
                    return;
               } 
               
          }
     
     }
     console.log(`i am a meera Array`);
}
checkMeera([7, 4, 9]);
// checkMeera([1, -6, 4, -3])

