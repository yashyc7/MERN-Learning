let x="Yash Chauhan"
x=9
console.log(x)

// like the let the const also have the block scope and therefore it can be accessed only in the block where it is declared
//const can never be reassigned, redeclared..

// var x = 2;     // Allowed
// const x = 2;   // Not allowed

// {
// let x = 2;     // Allowed
// const x = 2;   // Not allowed
// }

// {
// const x = 2;   // Allowed
// const x = 2;   // Not allowed
// }

function add(parameter1,parameter2)
{
    return parameter1+parameter2
}

const answer=add(3,4)
console.log(answer)



let myfunction =(a,b)=>(a*b)


hello=(str)=>"hello "+str

//we can't use the this keyword in the arrow function..
console.log(hello("yash"))


hello = function() {
    document.getElementById("demo").innerHTML += this;
  }

hello=()=>(document.getElementById("demo").innerHTML+=this);



multiply=(a,b=1)=>a*b

console.log(multiply(3,5))
console.log(multiply(5))

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
//the property takes the last value assigned while remaining in the position it was originally set.

console.log(mergedObj)
list1=[3,4,2,4,6,1]
const letters =new Set(list1)
console.log(letters)


letters.add("f")

console.log(letters)


console.log(typeof(letters))