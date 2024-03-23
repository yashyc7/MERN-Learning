//singleton(constructor) and the literal declereation of the object

const { log } = require("@tensorflow/tfjs-node");

//In this session we are going to use the literal declereation

const JsUser = {
  name: "Yash Chauhan",
  age: 34,
  Course: "Btech",
  "College Name": "MIT",
};
//First method of the accessing is using by passing the key element 
console.log("Hello ", JsUser["name"], "Your age is ", JsUser["age"]);

//second method is by using the . opereator like this 
console.log("Hello ", JsUser.name,"Your college name is ",  JsUser.Course)


//++++++++++++++++Symbol++++++++++++++++++++++++++


const mySymbol=Symbol('Key1')


const JsUser2 = {
  name: "Yash Chauhan",
  age: 34,
  [mySymbol]:"mykey2",
  Course: "Btech",
  "College Name": "MIT",
};

console.log(JsUser[mySymbol])


//changing values in the object 
JsUser['age']=43

//Object.freeze(JsUser)  //now any changes can't be applied on the JsUser object 

//Adding the function in the objectss



JsUser .greeting= function()
{

console.log("Hello Js user ...")



}

console.log(JsUser.gretting)//returns the reference of the funcntion 
//first unfreeze the object .. 
console.log(JsUser.greeting()) //executes the fucntion 



JsUser.greetings2=function()
{

console.log(`Hello js user ,${this.name} your college name is  ${this["College Name"] } and your age is ${this.age} ` )


}