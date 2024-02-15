const name="yash"

const repoCount=50

console.log(name+repoCount+"value ")
  //This syntax is outdataed 
  //in mordern writing techniques we use the backticks in telda button 
 // this is called the string interpolation  
  console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
  

  const gameName=new String('hiteshhc')


  console.log(gameName[0])  //output is h gamename is the string not an object 

  console.log(gameName.length)  // a protoypes


console.log(gameName.toUpperCase())

console.log(gameName.charAt(3)); //character at 3rd index
console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4) //it slices the original string 
console.log(newString)


const newString2=gameName.slice(-8,4) //we can also provide the negative values 



const newString3= "   hitesh  "  //user adds the space unknowingly to elimiate the spaces or characters we use 

console.log(newString3)
console.log(newString3.trim())//Removes the leading and trailing white space and line terminator characters from a string.

const url="https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','_'))


console.log(url.includes('hitesh')) //Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false


console.log(url.split('-'))