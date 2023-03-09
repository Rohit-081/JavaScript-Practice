// JavaScript is a single-threaded synchronous programming language.
// Event loop: An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc


// JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
function a(){
	console.log("a");
}

a();
console.log("End");


//Microtask Queue
// 1. Promises
// 2. Mutation observer





