// 
let a = document.getElementById("one");
console.log(a);
a.textContent ="toyota"
console.dir(document)


// let y =document.body.children[0].innerText = "hello"

// console.log(y)





    //    how to select an individiual element
        // 1 using getElementById() method 

// if we want to get the class name of the element we use 
// this first select(get) element by id  and show the classname using className

 let  className1 = document.getElementById("one");
       console.log(className1.className = "pink")


//2. querySelector() method
    //    using the value of to use for css  like class id and somethings lik .red #two and also Children
    //   ex:-
         console.log(document.querySelector(".red"))


         //selecting multiple element 

        //  1. we use the getElementByClassName() method 

        let abebe = document.getElementsByClassName("pink")
        console.log(abebe.item(0))


        // 2. getElementsByTagName()

        // we use to select the mutiple element by tag name like h1 . p , li

        let selectByTagName = document.getElementsByTagName("li")
            console.log(selectByTagName)
            // when we want to select one items be index use []
            console.log(selectByTagName[0])
            

            //reapiting actions for all nodeList items



            //**HTML collection and nodeList */
                //   htmlcollection 
                //     1 getElementsByClassName()
                //     2  getElementsByTagName()

                // nodelist 
                // querySelector()

               //   colection is like array but not exactlly array
                //  HTMLcollection is answer live dom elements 
                //ex:-
                     let el1 = document.getElementsByClassName("pink");
                       console.log(el1)
                    //    el1[0].className ="yellow"
                       //so know when use the loop we got the error because it have html collection let see it 
                        //    for(let i=0; i<el1.length; i =i+1){
                        //          let num =el1[i].className ="yellow"
                        //        console.log(num)
                        //    }

                        
                        // so live dom means if one variable have change before console or after console the value is use the updated value
                        // the error cames becouse of the value have access  by reference

                        //the solution is to convert the element of collection to array

                        let el2 = document.getElementsByClassName("pink")

                        console.log(el2)

                        let temp =[];
                        for(let i=0; i<el2.length; i++){
                            temp.push(el2[i]);  
                        }
                        //now the collection convert to the array

                        console.log(temp);
                        for(let i=0; i<temp.length; i++){
                            console.log(temp[i].className="red")
                        }
                        document.getElementById()
     
                    //traversing between element 

                    // 1. nextElementSybling 
                    // 2. previouseElementSybling
                    // 3. firstElementChild
                    // 4 lastElementChild

                    

