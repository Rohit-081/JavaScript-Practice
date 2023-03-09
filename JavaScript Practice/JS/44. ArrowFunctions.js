// Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.


// Traditional Function Expression
var add = function(a,b){
	return a + b;
  }
  
  // Arrow Function Expression
  var arrowAdd = (a,b) => a + b;


  // this difference

  var obj1 = {
    valueOfThis: function(){
      return this;
    }
  }
  var obj2 = {
    valueOfThis: ()=>{
      return this;
    }
  }
  
  obj1.valueOfThis(); // Will return the object obj1
  obj2.valueOfThis();


  function sum(a,b){
    return a+b;
  }


 class Person{
    constructor(name){
      this.name = name
    }

    printNameArrow(){
      setTimeout(() => {
        console.log('Arrow: ' + this.name);
      }, 100)
    }

    printNameFunction(){
      setTimeout(function(){
        console.log('Function: ' + this.name);
      }, 100)
    }

 }


 let person = new Person('Bob');
 person.printNameArrow()
 person.printNameFunction()
 console.log(this.name)