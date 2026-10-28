   function calculateTotal(a,b,c){
    return a + b +c;
   }
   let total = calculateTotal(70,80,90)
   console.log("total = ",total)

function calculateAverage(total){
    
    return total/3;
}
  let average = calculateAverage(total);
  console.log("average = ",average)

function grade(avg){
       if(typeof avg != "number"){
        return "please enter a numerical value"
       }
     else if(avg >= 90){
       
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
            return "invallid"
        }
      else{
        return "F";
      }
     
}

 console.log(grade(average))

 const calculateArraw = (total = d) => total;
console.log( calculateArraw("arrow total "+total))

function  displayFunction(message){
    console.log(message)
}

function proccesStudent(name,mark,callBack){
    const total = calculateTotal(mark[0],mark[1],mark[2]);
    const average = calculateAverage(mark[0],mark[1],mark[2]);
    const getgrade = grade(average);
    const message = `
    name ${name} 
    total value ${total}
    average ${average.toFixed(1)}
    grade ${getgrade} `
    callBack(message);
}

proccesStudent("Abebe",[80,90,60],displayFunction)



