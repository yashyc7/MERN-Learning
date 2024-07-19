// let ,var ,const

let a = 10;
const b = 20;
var c = 30;

// {} is used to defind the scope of the statement

console.log(a);
console.log(b);
console.log(c);

if (true) {
  let a = 40;
  const b = 50;
  var c = 60;
  console.log("inside the scope of the if : a: ", a, "b:", b);
}
console.log("outside the scope of the if:\n", a);
console.log(b);
console.log(c); //value of var become changed
// no error for redeclearation inside the sepreate scope of the if

// The var statement declares function-scoped or globally-scoped variables, if we also decleare them in the if scope it can also change the value of the variable c outside the scope of c

//in browser environment the scope is different and in text editor node enviroment the scope is different .

function one() {
  const username = "hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); //gives error since can't access the website constant
  two();
}

one();

if (true) {
  const username = "hitesh";
  if (username == "hitesh") {
    const website = " Youtube";
    console.log(username + website); //hitesh Youtube
  } 
  // console.log(website);//error
}
// console.log(username);//error


//-----------------Intresting Discussion ----------------------------


function  addone(num){
  return num+1
}

console.log(addone(15));


const answer=function addtwo(num)
{
  return num+2;
}

console.log(answer(4))  