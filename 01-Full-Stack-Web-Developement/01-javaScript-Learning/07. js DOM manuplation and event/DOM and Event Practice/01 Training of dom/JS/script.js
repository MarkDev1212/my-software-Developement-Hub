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
        console.log(abebe)


        // 2. getElementsByTagName()

        // we use to select the mutiple element by tag name like h1 . p , li

        let selectByTagName = document.getElementsByTagName("li")
            console.log(selectByTagName)