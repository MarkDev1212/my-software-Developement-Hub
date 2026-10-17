// Question 10 (Second largest)
// Write a function that takes an array of numbers and returns the second largest unique number in the array.
// ■ Test 1: secondLargest([4, 1, 7, 7, 3]) returns 4
// ■ Test 2: secondLargest([10, 20, 30]) returns 20


//   1.solve it on paper (mind):-
//       -[4, 1, 7, 7, 3]
//         comper if the value have largest from all element 


//   2.  write sudo code:-
//         - difine a function secondLargest(arr)
//              chck if the value have largest 
//                  use for loop
//                      if



function secondLargest(arr){
    let lrg = -Infinity;
    let slrg = -Infinity;
    
        for(const num of arr){
            if(num>lrg){
                slrg = lrg;
                lrg = num;
            }
            else if(num>slrg && num !== lrg){
                slrg = lrg;
            }



        }

        return slrg === -Infinity ? null : slrg;
}

console.log(secondLargest([4, 1, 7, 7, 3]));