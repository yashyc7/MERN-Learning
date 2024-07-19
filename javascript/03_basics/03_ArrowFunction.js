const user={
    username:"yash chauhan",
    price : 999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`),
        console.log(this);
    }

}


//this for the outside current context is undefined 
//in browser the default this point to the window object 

user.welcomeMessage();


user.username="Hitesh"  //username is changed 

user.welcomeMessage();



function chai()
{
    console.log(this);
}


 chai(); // <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Function: structuredClone],
//     atob: [Getter/Setter],
//     btoa: [Getter/Setter],
//     performance: [Getter/Setter],
//     fetch: [Function: fetch],
//     navigator: [Getter],
//     crypto: [Getter]
//   }
// <---------------------another way to decleare an function is ------------>

// const chai = function(){
//     let username="hitesh"
//     console.log(this.username)
// }

// chai();


const code = () => {
    let username="hitesh";
    console.log(this);//ans is {} we can't access elements in the arrow function using this keyword 
}

code();



const addtwo=(num1,num2)=>{
    return num1+num2
}

console.log(addtwo(1,3)); //4


//--------------Implicit return method -----------

const addThree=(num1,num2,num3)=>(num1+num2+num3)
addThree(3,4,2);//9  no use of the semicolon and the return keyword  


//trick to learn is that if there is curly braces we have to use the return keyword if there is no curly braces then no need to use the return keyword just return the answer in the ()


