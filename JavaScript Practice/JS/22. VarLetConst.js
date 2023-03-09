// var declarations are globally scoped or function/locally scoped.
// var variables can be re-declared and updated
// Hoisting of var
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// So var variables are hoisted to the top of their scope and initialized with a value of undefined.

var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"

// let is block scoped
// A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
// let can be updated but not re-declared.
// Unlike var, a let variable cannot be re-declared within its scope.

/* let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined */

// Correct
/* let greeting = "say Hi";
   greeting = "say Hello instead"; */

// InCorrect
/*   let greeting = "say Hi";
   let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared */

// However, if the same variable is defined in different scopes, there will be no error:

// Correct
/*  let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"

   So a variable declared in a block with let  is only available for use within that block.

   Hoisting of let
   Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

   Const
   Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

   const declarations are block scoped
   Like let declarations, const declarations can only be accessed within the block they were declared.

   const cannot be updated or re-declared
   This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

   const greeting = "say Hi";
   greeting = "say Hello instead";// error: Assignment to constant variable. 
      
   nor this:

   const greeting = "say Hi";
   const greeting = "say Hello instead";

   This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:
     const greeting = {
        message: "say Hi",
        times: 4
    }
   
   while we cannot do this:

    greeting = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.

   we can do this:

    greeting.message = "say Hello instead";

   Hoisting of const
      Just like let, const declarations are hoisted to the top but are not initialized.

      So just in case you missed the differences, here they are:

      var declarations are globally scoped or function scoped while let and const are block scoped.
      var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
      They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
      While var and let can be declared without being initialized, const must be initialized during declaration.
 */
