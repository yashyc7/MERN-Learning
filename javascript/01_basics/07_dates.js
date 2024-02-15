//Date
let myDate= new Date()

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
 

//Date is an object 
//To declare the date


let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toLocaleString())


//months are counted as array like january from the zero 

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myTimeStamp.toString)
console.log(Math.floor(myTimeStamp/1000))

console.log(myCreatedDate.getDay())


myCreatedDate.toLocaleString('default',{weekday:"long",
})
