


function Person(firstName,lastName,age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age =age;
      this.abebe = function(){
           return `  
           first name ${firstName}
           last name ${lastName}
           age ${age}` }
}
  
let abebbe = new Person("abebe","kebede",19);
let  kebede = new Person("kebede","alemu",50)
    console.log(abebbe.abebe())
    console.log(kebede.abebe())

