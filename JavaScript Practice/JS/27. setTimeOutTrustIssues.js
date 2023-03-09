console.log("Start");

function cb(){
	console.log("Callback");
}

setTimeout(cb, 0);

console.log("End");