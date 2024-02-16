//singleton(constructor) and the literal declereation of the object

//In this session we are going to use the literal declereation

const JsUser = {
  name: "Yash Chauhan",
  age: 34,
  Course: "Btech",
  "College Name": "MIT",
};
//First method of the accessing is using by passing the key element 
console.log("Hello ", JsUser["name"], "Your age is ", JsUser["age"]);

//second method is by using the . opereator like this 
console.log("Hello ", JsUser.name,"Your college name is ",  JsUser.Course)


//++++++++++++++++Symbol++++++++++++++++++++++++++


const mySymbol=Symbol('Key1')


const JsUser2 = {
  name: "Yash Chauhan",
  age: 34,
  [mySymbol]:"mykey2",
  Course: "Btech",
  "College Name": "MIT",
};

console.log(JsUser[mySymbol])