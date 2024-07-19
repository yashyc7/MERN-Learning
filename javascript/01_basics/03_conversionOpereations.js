let  score = "33"

console.log(typeof(score)); //string

let valueInNumber = Number("33abc") 

console.log(typeof valueInNumber)   //number


console.log(valueInNumber)  //output is the NaN since it means the "not a number " . 

let value = null 
console.log(typeof(value) )  //object 


// " 33 " => 33
//"33abc"=> NaN not a number 
// true => 1; false => 0 
let isLoggedIn = true
isLoggedIn=Number(true)
console.log(isLoggedIn)  //1

// 1 => in boolean it is converted to the true 
// and for the zero the value is the false
// "hitesh" => true 

let someNumber =33 
let stringNumber= String(someNumber)
console.log(stringNumber) //33
console.log(typeof(stringNumber)) //string
// ************************OPEREATIONS*******************

let value1=3
let negvalue = -value1
console.log(negvalue) //-3


let str1="hello" 
let str2=" Yash"

let str3= str1+str2
console.log(str3)

console.log("1"+2+"2") // output 122
console.log(1+2+"2") // output 32 so which value come first that opereator will be the executing 

//tricky conversions
 
console.log(true)  //true
console.log(+true)  //true 

// console.log(true+) gives an error 

console.log(+"") //0 this is the bad practise 

let num1, num2, num3 

num1=num2=num3=2+2

let gameCounter=100
gameCounter++
console.log(gameCounter)
//101