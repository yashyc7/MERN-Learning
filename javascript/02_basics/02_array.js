const marvel_heros = ["thor", "iron man ", "spiderman "]
const dc_heros = ["superman", "batman", "flash"]

// marverl_heros.push(dc_heros)


console.log(marvel_heros);

//They are not merged but they store another array in array like this
//  [
//   'thor',
//   'iron man ',
//   'spiderman ',
//   [ 'superman', 'batman', 'flash' ]
// ] 

//to access them 

// console.log(marverl_heros[3][2])//to access the flash element in the marvel heros array 


//  concat returns the new array while the push works in the original array  so this is used for the merging process 

const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros)
// the all heros will merge all the element  from the marvel and the dc heros and dont store them in the array format like the push functions type . 

///Spread Opereator 
//to cut them in small pieces like we drop an glass it broke into pieces   just for an instance 
// we use ... to broke them 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
//This is the alternative of the concat to merging process the array thus produced is the merging of the both the array ..


const another_array = [1, 2, 4, [34, 64, 32, [6, 77, 85]]]

// to resolve this we use the flat property to resolve the multidimensional and complex array 

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

//for data scrapping this method is used mostly 


console.log(Array.isArray("Yash Chauhan"))
console.log(Array.from("Yash Chauhan")) // for converting to the array

//Intresting array 
console.log(Array.from({ name: "Yash chauhan " }))
//output is empty array []

//for converting bunch of elements into the arrary we get 
let score1=100

let score2=200

let score3=300
console.log(Array.of(score1,score2,score3))