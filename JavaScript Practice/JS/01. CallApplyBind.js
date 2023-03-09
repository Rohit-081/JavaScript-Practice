// 1. Call():
// It’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.
// Call is a function that helps you change the context of the invoking function. 
// In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.


// func.call(thisObj, args1, args2, ...)

// 2. Apply():
// Apply is very similar to the call function. 
// The only difference is that in apply you can pass an array as an argument list.

// func.apply(thisObj, [args1, args2, ...]);
// func.apply(thisObj, new Array(args1, args2));

// 3. bind():
// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.



function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);


// How to call a function with no arguments in JS

const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call();


// function Car(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }

// function setBrand(brand){
// 	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
// 	Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);


function addUp(){
  //Using arguments to capture the arbitrary number of inputs
  const args = Array.from(arguments); 
  this.x = args.reduce((prev, curr) => prev + curr, 0);
  console.log("this.x = ", this.x);
}

function driverFunc(){
  const obj = {
      inps: [1,2,3,4,5,6]
  }
  addUp.apply(obj, obj.inps);
}

driverFunc();

function sayHello() {
  return "Hello " + this.name;
}
var obj = { name: "Sandy" };
sayHello.call(obj);

// Returns "Hello Sandy"

// call() method allows an object to use the method (function) of another object.
var person = {
  age: 23,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 54 };
person.getAge.call(person2);
// Returns 54

let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();

var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function () {
  console.log(this.getPokeName() + "I choose you!");
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'



// arr.map(func)

// arr is an array on which the map is called.
// func is the function that needs to run on each element of an array.
// The basic functionality of a map function is simple:

// It is a function that walks through each element of an array and applies the function that is passed as an argument. // The return type of a map is again an array with func being applied on each element.

// Now we understand the requirements, so we can move on to create our own map function. Here is the code of our new map function:

function newMap(func){
  let destArr = [];
  const srcArrLen = this.length;
  for(let i = 0; i < srcArrLen; i++){
    destArr.push(func.call(this, this[i]));
  }

  return destArr;
} 

Object.defineProperty(Array.prototype, 'newMap', {
  value: newMap
}); 

const arr = [1,2,3];
const newArr = arr.newMap(item => item + 1);
console.log(newArr);