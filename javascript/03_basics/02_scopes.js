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
console.log("outside the scope of the if:\n",a);
console.log(b);
console.log(c); //value of var become changed
// no error for redeclearation inside the sepreate scope of the if

// The var statement declares function-scoped or globally-scoped variables, if we also decleare them in the if scope it can also change the value of the variable c outside the scope of c
