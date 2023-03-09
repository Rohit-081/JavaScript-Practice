//A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state, country) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

let printMyName = printFullName.bind(name, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();


Function.prototype.mybind = function(...args){
  let obj = this
  params = args.slice(1);
  return function(...args2){
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printMyName2 = printFullName.mybind(name, "Dehradun");
console.log(printMyName2);
printMyName2("Haryana");
