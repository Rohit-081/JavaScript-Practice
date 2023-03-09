// Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.
let multiply = function(x,y){
	console.log(x*y);
}

let multiply2 = function(x){
	return function(y){
	 console.log(x*y)
	}
}


let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo);
multiplyByTwo(3);


let multiplyByThree = multiply2(3);
multiplyByThree(4);