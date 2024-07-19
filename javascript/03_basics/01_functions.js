function sayMyName() {
  console.log("hitesh");
}

//sayMyName()

function addTwoNumbers(a, b) {
  //since javascript is dynamically typed so therefore no need to give the datatype of the numbers
  return a + b;
}

function printTheAddition(a, b) {
  console.log(a + b);
}
const result = printTheAddition(4, 5);

console.log(result); //undefined since we didn't returned anything from the function

console.log(addTwoNumbers(3, 5)); //8

console.log(addTwoNumbers(3, "a")); //3a

console.log(addTwoNumbers(3, null)); //3
console.log(addTwoNumbers(3)); //NaN

function loginUsername(username) {
  if (username === undefined) {
    console.log("please enter the username");
    return;
  }
  return `${username} just logged in `; //this is telda sign not an inverted comma
} //value is returned but not printed using loginUsername("hitesh")  for printing we have to use the console.log(loginUsername("hitesh"))

function loginUsername(username='sam') {  //to avoid the presence of undefined so whenever the argument is missed the default parameter is set .
  if (username === undefined) {
    console.log("please enter the username");
    return;
  }
  return `${username} just logged in `; //this is telda sign not an inverted comma
}

loginUsername("hitesh"); //no output is seen

console.log(loginUsername("hitesh")); //hitesh

console.log(loginUsername()); //undefined if we send nothing



//whenever we dont know how many arguments will be passed  like the how many items will user add in teh shopping cart 
function CalculatePrice(num1)
{
  return num1
}

//CalcuatePrice(num1,num2,num3) then the  statement will give error to over come this we use ... opereator rest opereator or this is also called the spread opereator 

 function CalcuateOverallPrice(...num1)
 {
  return  num1
 }

 console.log(CalcuateOverallPrice(300,399,599,345,234));
 //returns a array of the items you sent [ 300, 399, 599, 345, 234 ]



 //how does these arguments assigned to each other we can 


function calculatePriceButDistributed(val1,val2,...val3)
{

  return val3
}  //it returns the [599,345,234] since val1 stored the 300 and the val2 stored the 399


//--------------Object interfacing with the function -----------



const user={
  username:"hitesh",
  price: 1900

}



function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);


handleObject({username:'yash', price:345}); //direct sending the object without making them outside



//-------------Array interfacing with the functions--------------------




const newArray=[200,400,100,600]

function returnSecondValue(getArray)
{
   return getArray[1];
} 


console.log(returnSecondValue(newArray));

console.log(returnSecondValue([4,5,52,40,9]))

