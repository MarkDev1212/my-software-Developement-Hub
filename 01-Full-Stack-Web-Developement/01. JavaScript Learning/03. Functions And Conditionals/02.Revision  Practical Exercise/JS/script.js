

function calculateAverage(a,b,c){
    let avg =  (a+b+c)/3;
    return avg;
}

console.log(calculateAverage(50,60,100));
var avg = calculateAverage(89,67,90);
console.log(avg)
function grade(avg){
      if(avg >= 90){
       
        return "A+"
      }
      else if(avg >= 85){
        return "A";
      }
      else if(avg >= 80){
        return "A-";
      }
      else if(avg >= 75){
        return "B+";
      }
      else if(avg >= 70){
        return "B";
      }
      else if(avg >= 65){
        return "B-";
      }
      else if(avg >= 60){
        return "C+";
      }
       else if(avg>=100 || avg <= 0){
            return "envallid"
        }
      else{
        return "F";
      }
     
}
 console.log(grade(avg))


