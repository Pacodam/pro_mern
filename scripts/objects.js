//object literals

let empty = {};

let point = { x: 0, y: 0 };

console.log(point.x);

let book = {
  "main title": "Javascript",
  "sub title": "The definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    surname: "Flanagan",
  },
};

console.log(book["main title"], book.for, book.author.firstname);

book.price = 27;

console.log(book);

//creating objects with new

let o = new Object();
o.name = "Oscar";
console.log(o);

let a = new Array();
let d = new Date();
let r = new Map();
let s = new Set();

//object create()

let o1 = Object.create({ x: 1, y: 2 });
console.log(o1.x + o1.y);

//querying and setting properties --> using dot or square brackets
//objects as associative arrays -> for/in (like foreach in Java), ES6 however Map class is often a bettr choice

//Inheritance

let o2 = {};
o2.x = 1;
console.log(o2);

let p1 = Object.create(o2); //inherits properties from o2
console.log(p1.x);
console.log(p1);

//deleting properties
console.log(book.author);
console.log(delete book.author); //true: succeeded
console.log(delete book.nothing); //true: not effect
console.log(book.author); //undefined

//testing properties

//in
let o3 = { x: 1 };
console.log("x" in o3); // => true: o has an own property "x"
console.log("y" in o3); // => false: o doesn't have a property "y"
console.log("toString" in o3); // => true: o inherits a toString property

//You can simply use o.x !== undefined to test

//hasOwnProperty()
let o4 = { x: 1 };
o4.hasOwnProperty("x"); // => true: o has an ownproperty x
o4.hasOwnProperty("y"); // => false: o doesn't have aproperty y
o4.hasOwnProperty("toString"); // => false: toString is aninherited property

//enumerating properties
let o5 = { x: 1, y: 2, z: 3 };
for (let p in o5) {
  console.log(p); //x, y, z
}

//An alternative is get array of property names for an object and
//then loop thorugh that array with a for/of loop
//Object.keys()
//Object.getOwnPropertyNames()
//Object.getOwnPropertySymbols()
//Reflect.ownKeys()

//extending objects,  copying of properties of one object to another
let target = { x: 1 },
  source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
target; // => {x: 1, y: 2, z: 3}

//in ES6
let o6 = {};
let defaults = { x: 7, y: 9 };
Object.assign(o6, defaults); // overwrites everything in o with defaults
console.log(o6);

//object serialization
//is the process of converting an object's state to a string from
//which it can later be restored.
//JSON.stringify()  : serializes
//JSON.parse()  : restores

let o7 = { x: 1, y: { z: [false, null, ""] } };
let s1 = JSON.stringify(o7);
console.log(s1); //{"x":1,"y":{"z":[false,null,""]}}
let restored = JSON.parse(s1);

console.log(o7); //{ x: 1, y: { z: [ false, null, '' ] } }

//object methods
//toString()
//toLocaleString()
//valueOf()
//toJson()

//extended object literal syntax
//shorthand properties
//computed property names
//symbols as property names
//spread operator
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height; // => 175

//shorthand commands
//prior to ES6
let square = {
  area: function () {
    return this.side * this.side;
  },
  side: 10,
};
square.area(); // => 100

//from ES6
let square = {
  area() {
    return this.side * this.side;
  },
  side: 10,
};
square.area(); // => 100

//property getters and setters

