//objects singleton or constructor

// const tinderuser=new Object()
//this is singleton object
// and below is an another way of making the object  called the non singleton object
const tinderuser = {};

tinderuser.id = "123abc";
tinderuser.name = "samy";
tinderuser.isLoggedIn = false;
//now the output is { id: '123abc', name: 'samy', isLoggedIn: false }

console.log(tinderuser);

//currently this is an empty object like  {}


const regularUser={ 
    email:'some@gmail.com',
    fullname:{
        userfullname:{
            first_name:"yash",
            last_name:'chauhan'

        }
    }

}


console.log(regularUser.fullname?.userfullname.first_name)

//this ? suggests the optional chaning if the full name further not found in the object then ignore it . 

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
//const obj3={obj1,obj2} this cant be possible for merging the error will be encountered . 
const obj3=Object.assign({},obj1,obj2)
console.log('obj3 =', obj3)


//.assign has the two arguments the (target , source) mean the source values are copied to the target object  thats why the first argument is considered as target given as the {} empty object and other arguments are considered as the source object . 

//another method



const obj4={...obj1,...obj2}///... represents the spread opreator  ... spreads the object1 and 2 and then the object combines them . 
console.log('obj4 =',obj4)


console.log(tinderuser);



console.log(Object.keys(tinderuser))//finding all the keys of the object tinderuser and this returns an array like of [ 'id', 'name', 'isLoggedIn' ]


console.log(Object.values(tinderuser))
//for getting all the values associated to the above keys this returns an array of the values in the object but the keys are not included like [ '123abc', 'samy', false ]


console.log(Object.entries(tinderuser))//each entry is made into array this returns an number of array of entries  like [ [ 'id', '123abc' ], [ 'name', 'samy' ], [ 'isLoggedIn', false ] ]
 

//now to check wheather that the object tinder user have the isloggedIn named key or not  if it exists or not 


console.log(tinderuser.hasOwnProperty('isLoggedIn'))
//it returns the boolean value so that it confirms that the value exists or not in this case the tinder user has the key of isLoggedIn so the answer is returned as the true



