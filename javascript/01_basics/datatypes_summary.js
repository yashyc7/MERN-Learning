//solving the merging branch main 

//primitive datatypes  or call by value datatypes
// 7 categories are there : String , Int , Number , Boolean , null , undefined  , Symbol , BigInt These are also called the call by value since the copy of the original datatype is provided .

const score = 100 //we dont tell the javascript this is a number type value  therefore the js is the dyanamically typed language 
const scoreValue = 100.3


const isLoggedIn = false

const outsideTemp = null


let userEmail;  //undefined 


//for defining the symbols to give the unique id 

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid); //they are not equal even if the value passed is the same at the instant since the Symbol create the unique id 

const bigNumber = 34544234524523324n//after using n this is converted to the bigint range is upto 2^53






// Non primitive data types or call by reference data types 

//Array , objects (most important topics), functions . 

// For example 

const heros = ["shaktiman", "ironman", "doga"] //array

let myobj = {

    name: "hitesh",
    age: 22,
}


const myfunction = function () {

    console.log("Hello world");

}

console.log(typeof (outsideTemp))  //null datatype is object  and the bigInt datatype is the undefined

console.log(typeof (myfunction)) //function returns the object functions

//stack(Primitive)  => we get copy of the value ,  Heap(Non-Primitive) => we get original value of the datatypes

let myYoutubeName = "hiteshchaudhary.com"

let anothername = myYoutubeName

anothername = "chaiorcode"

console.log(myYoutubeName)
console.log(anothername)



let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}


let user2=user  //now both user2 and user are pointing to the heap containing object email and the upi 


user2.email="yashyc7@gmail.com" //reference value will be changed for the both now 
console.log(user.email) //yashyc7@gmail.com
console.log(user.upi) //"user@ybl"
console.log(user2.email) //yashyc7@gmail.com
console.log(user2.upi) //"user@ybl"
//hey this code was edited using the github
