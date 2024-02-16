//There are two ways to define the object 1. Literal 2. Constructor / singleton

//Object literals : is an technique to declare the object 
//IN javascript the object work like as the dictionaries in the python 


const mySymbol=Symbol("key1")




const JsUser={
"name":"Hitesh",
"age":18,
[mySymbol]:"myInsertedSymbol",
"email":"hitesh@gmail.com",
"location":"Jaipur",
"isLoggedIn": false,
"latLogInDays":["Monday","Saturday"],
}
console.log(JsUser['email']) // send the values as the string since the key is the string 

//another method to access is using the . opereator 

console.log(JsUser.email)

//TO access the symbols

console.log(JsUser[mySymbol])
console.log(typeof JsUser[mySymbol])

//for changing the values in the object 
JsUser['email']="chatgpt@gmail.com"
console.log(JsUser)


//for locking the values so that no one can change the object 

// Object.freeze(JsUser)
  //after freezing we can't change the freezed object also it doesn't give an error

JsUser['email']="yashc94@gmail.com"

console.log(JsUser)  //value is not 

///Adding the greeting to the object 

JsUser.greeting = function(){

    console.log(`Hello js user , ${this.name}  , Your current location is ${this.location}`) 


}//but first unfreeze the object 

console.log(JsUser.greeting )//function ka refrence aata hain 


console.log(JsUser.greeting())

// function chal jata hain 

JsUser.greetingTwo=function()
{
console.log(`second greeting for js user ${this.name} `)

}

console.log(JsUser.greetingTwo())


//ok done now we will read the another examples on the next video