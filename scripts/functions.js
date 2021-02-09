//ch 8

//function declarations
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(3));

//the name of the function is a variable
console.log(factorial); //[Function: factorial]
factorial.description = "Recursive function";
console.log(factorial.description);

//a function without return, returns undefined value to the caller

//Function expressions
const square = function (x) {
  return x * x;
}; //without name
const f = function fact(x) {
  if (x <= 1) return 1;
  else return x * fact(x - 1);
}; //include name, useful for recursion

//function expressions used as arguments to other functions
let arr = [3, 2, 1];
arr.sort(function (a, b) {
  console.log(a - b);
  return a - b;
});
console.log(arr); // [1,2,3]

//automatically invoked after definition
let tensquared = (function (x) {
  return x * x;
})(10);
console.log(tensquared); //100

//arrow functions (ES6)
const sum = (x, y) => {
  return x + y;
};
const summ = (x, y) => x + y;
const polynomial = (x) => x * x + 2 * x + 3;
const constantFunc = () => 42;

const f1 = (x) => {
  return { value: x };
}; // Good: f() returns an object
const g = (x) => ({ value: x }); // Good: g() returns an object
const h = (x) => {
  value: x;
}; // Bad: h() returns nothing
//const i = x => { v: x, w : x }; // Bad: Syntax Error

//Ideal to pass function to another function, like in map(), filter(), reduce()
// Make a copy of an array with null elements removed.
let filtered = [1, null, 2, 3].filter((x) => x !== null); //filtered == [1,2,3]
// Square some numbers:
let squares = [1, 2, 3, 4].map((x) => x * x); //squares == [1,4,9,16]

//nested functions
function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}

function logg(str) {
  str += "";
  function logChr(chr) {
    console.log(chr);
  }
  str.split("").map((chr) => logChr(chr));
}

logg("casa"); //c, a, s, a
logg(12345);

//8.2 INVOKING FUNCTIONS

//Function invocation
logg("casa");
//strict mode/non strict mode
const strict = (function () {
  return !this;
})();
console.log(strict); //false

//Method invocation
let m = {};
m.l = logg;
m.l("app"); //a p p

let calculator = {
  // An object literal
  operand1: 1,
  operand2: 1,
  add() {
    // We're using method shorthand syntax for this function
    // Note the use of the this keyword to refer to the containing object.
    this.result = this.operand1 + this.operand2;
  },
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result; // => 2

calculator["result"]; //2, with square brackets

m["l"]("house"); // Another way to write o.m(x,y).

m[0] = function () {
  console.log("inside m[0]");
};
console.log(m);

m[0](); // Also a method invocation (assuming a[0] is a function).


//workaround to obtain this value in a nested function
let o = {
  // An object o.
  m: function () {
    // Method m of the object.
    let self = this; // Save the "this" value in a variable.
    this === o; // => true: "this" is the object o.
    f(); // Now call the helper function f().
    function f() {
      // A nested function f
      this === o; // => false: "this" is global or undefined
      self === o; // => true: self is the outer"this" value.
    }
  },
};
o.m(); // Invoke the method m on the object o.

//ES6: arrow functions inherit the this value
const fo = () => {
  this === o // true, since arrow functions inherit this
  };


//Constructor invocation
let obj1 = new Object();
let obj2 = new Object; //equivalent


//Indirect invocation
//call()  apply()  described in 8.7.4

//Implicit function invocation
  //advanced stuff



//8.3 FUNCTION ARGUMENTS AND PARAMETERS

//optional parameters and defaults
//Rest parameters and variable-length argument lists
//The arguments object
//The spread operator for function calls
//Destructuring function arguments into parameters
//Argument types

