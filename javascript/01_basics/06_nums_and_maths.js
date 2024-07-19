
//simple declereation no type declereation 
const score = 400
console.log(score) //400

//alternatively 

const balance = new Number(400)  //This is the way to declare the value that is guarentted a number whereas in simple denotion it is not sure sometimes such as when in case of 1 or 0 in boolean or taken as the number ie. to not misunderstand the datatype between number and boolean whenever the user inputs either 1 or 0
console.log(balance) //[Number: 400]



console.log(typeof (balance.toString())) //chaning the balance to the string 

console.log(balance.toFixed(2)) //using precision value,  decimal ke baad 2 point aayenge 

const otherNumber = 23.56
console.log(otherNumber.toPrecision(3)) //returns the string ,taking 3 roundoff value  


const hundreads = 10000000
console.log(hundreads.toLocaleString())  // for reading the zeros easily in 3,2,2 format  in US reigon format \
//To locale string in basically  using the commas between digits in 3,2,2 format 


//+++++++++++++++++++++Maths +++++++++++++++++++++++++++++++++++++++++++


console.log(Math.abs(-3))
// abs, round,ceil, floor 
console.log(Math.ceil(3.5))
console.log(Math.round(23.534))

console.log(Math.floor(434.5324))

console.log(Math.sqrt(34.34))

console.log(Math.min(3,5,2,6,1,32,2.6))

//This is the most important function which is used 

console.log(Math.random()) //always give between the zero and 1 
console.log(Math.random()*10+1) //give the value greater than 1 

console.log(Math.random()*10+1)


const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min)
)








