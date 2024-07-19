console.log(2>1) //true
console.log(2>=1) //true
console.log(2<1)  //false
console.log(2==1) //false
console.log(2!=1) //true


console.log("2">1)  //true // javascript automatically convert the string value 2 to the number for the comparison 

console.log("02" > 1 )  //true


 console.log("Hite" > "yash") //false
 console.log(null>0)  //false
 console.log(null==0) //false
console.log(null<0)  //false
console.log(null>=0)  //true

 console.log(undefined == 0 )  //false
 console.log(undefined>0) //false
 console.log(undefined<0)  //false
 console.log(undefined>=0)  //false
 console.log(undefined<=0)  //false
  //=== checks wheather the value and with also check their datatype too.  strict checking

  /// === 
console.log("2"===2) //false


//These types of conversions are avoided because of the confusion issues . 


console.log(typeof undefined)  //undefined
console.log(typeof null)  //object
console.log(typeof BigInt) //all datatypes are function wheareas the null is an object 