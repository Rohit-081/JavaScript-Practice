// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

let arr = ["Akshay", "Aditya"];
let object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};

let object2 = {
  name: "Aditya",
};

// Never do this
object2.__proto__ = object;
