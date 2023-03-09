// Debouncing in javascript

let counter = 0;
const getData = () => {
		// calls an API and gets Data
		console.log("Fetching Data...", counter++)
}


const debounce = function(fn, d){
	let timer;
	return function(){
		let context = this, 
			args = arguments;
			clearTimeout(timer);
			 timer = setTimeout(() => {
				fn.apply(context, arguments);
			}, d);
	}
}

const betterFunction = doSomeMagic(getData, 300);



// Throttling

const throttle = (func, limit) => {
	let flag = true;
	return function(){
		if(flag){
			func();
			flag = false;
			setTimeout(() => {
				flag = true;
			}, limit)
		}
	}
}

const expensive = () => {
		console.log("Expensive")
}