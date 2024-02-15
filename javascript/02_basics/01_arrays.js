//arrays 


const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]
//elements can be differnt types

console.log(myArr[0])

//javascript copy opereations create the shallow copies. (All standard copy opereations with any javascript objects create shallow copies rather than the deep copies).  

//shallow copy is an copy of the object which share the same references(point to the same underlying values ) same  as the concept in the heap memory . 


//deep copy  of an object whose properties do not share the same reference point i.e same as the stack concept . 


const myHeros = ["shaktiman", "Ironman"]

const myArr2 = new Array(1, 2, 3, 5)

///special topics there are many prootypes are there

myArr.push(6)

console.log(myArr)

myArr.push(8)

console.log(myArr)


myArr.pop()

myArr.unshift(9) // 9 is inserted at the end of the arrray the whole array index is increased by 1  so this is not suggested but it can be used in other 
console.log(myArr)


myArr.shift()
//it removes the unshifted or first elemet in the array
console.log(myArr)




console.log(myArr.includes(9)) //returns the true or false if the value is existed in the array returns -1 if doesn't exist 


console.log(myArr.indexOf(3))


//some more intresting 

const newArr=myArr.join()//binds and change the array to the String format 
console.log(myArr) //old array 
console.log(newArr)//new array 

//slice, splice 
//In slice upper bound is excluded 
console.log("original Array:", myArr)

const myn1=myArr.slice(1,3) // 3rd index is excluded 

console.log("after slicing the original  array : " , myArr)


//In splice 

//The upper bound is included

console.log (myArr.splice(1,3));

console.log("original Array after splicing ", myArr)



//most important thing 


//In slice the original array is not changed 
//In splice the original array is changed to the  (myArr - splicing )like this one [ 0, 4, 5, true, 'hitesh', 6 ]