var n = 10;
console.log(n);

// string

let name = "John";
console.log('the type of name is', typeof (name));
console.log(name);

// Number

let age = 29;
console.log('the type of age is', typeof (age));
console.log(age);

// Boolean

let condition = true;
console.log(typeof (condition));
// null 

let name1 = null;
console.log(typeof (name1));

// // undefined


// let name2 = available;
// console.log(typeof(name2));

// symbol

let name3 = Symbol();
console.log(typeof (name3));

// Coercion

var value1 = "5";
var value2 = 90;
var sum = value1 + value2;


// String Concatenation

var msg1 = "There are ";
var numStudents = 5;
var msg2 = " members";


// Conditional Statements

// if

let a = 2;
if (a) {
    console.log("This is true");
}


// if else

let b = 5;
if (b < 4) {
    console.log("less than 5");
}
else {
    console.log("greater than or equal to 5");
}


// else if


let d = 20;
if (d < 10) {
    console.log("a is less than 10");
} else if (d < 30) {
    console.log("a is less than 30");
} else {
    console.log("a is greater than 30");
}

//switch

let dice = 3;
switch (dice) {
    case 1:
        console.log("You Got One");
        break;
    case 2:
        console.log("You Got Two");
        break;
    case 3:
        console.log("You Got Three");
        break;
    default:
        console.log("You Did Not Roll The Dice");
}

// Arithmetic Operators

let x = 7;
let y = 7;


// Addition(+)
console.log(x + y);

// Subtraction (-)
console.log(x - y);

// Multiplication(*)
console.log(x * y);

// Division(/)
console.log(x / y);

// Remainder of division (%)
console.log(x % y);

// Exponentiation (**)
console.log(x ** y);

// Increment (++)
console.log(++x);

// Decrement (--)
console.log(--x);



// Assignment operators


let x = 1;


//Relational
console.log(x > 0)
console.log(x >= 1)
console.log(x < 1)
console.log(x <= 1)


//Equality
console.log(x === 1)
console.log(x !== 1)

// Equality Operators

// Strict equality ( === )

console.log(1 === 1)
console.log('1' === 1)

// Lose equality ( == )

console.log(1 == 1)
console.log('1' == 1)


// Ternary operator or conditional operator

var age = 20;
age >= 18 ? console.log("adult") : console.log("minor");

// AND Operator(&&)

var x = 6;
var y = 3;
console.log(x < 10 && y < 1);

// OR Operator(||)

var x = 6;
var y = 3;
console.log(x < 10 || y < 1);

// NOT Operator(!)

var x = 6;
var y = 3;
console.log(x == y);
console.log(!(x == y));

// for Loop

for (let i = 0; i <= 5; i++) {
    console.log("The value is " + i);
}

// while Loop

let i = 0;
while (i < 3) {
    let multiply = i * 2;
    i++;
    console.log(multiply);
}


// do while Loop


let n = 5
do {
    let square = n * n;
    n--;
    console.log(square);
} while (n > 0);

// for in Loop

let emp = {
    fname: "John",
    lname: "Carter",
    age: 55,
    designation: "UX designer"
}

let person;
for (person in emp) {
    console.log(person);
    console.log(emp[person]);
}

// for of loop

let fruits = ["Apple", "Banana", "Grapes", "Guva"];

for (let names of fruits) {
    console.log(names);
}

// Array

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
console.log(fruits[0]); 
console.log(fruits[1]);

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
console.log(fruits.length);

// push()

var colors = ["Red", "Green", "Blue"]; 
colors.push("Yellow");
console.log(colors);

// unshift()

var colors = ["Red", "Green", "Blue"]; 
colors.unshift("Yellow");
console.log(colors);

// pop()

var colors = ["Red", "Green", "Blue"];
colors.pop();

console.log(colors);

// shift()

var colors = ["Red", "Green", "Blue"];
colors.shift();

console.log(colors);

// splice()

var colors = ["Red", "Green", "Blue"];

// Deleting elements
colors.splice(0, 1);
console.log(colors);


//Adding elements at position one
colors.splice(1, 0, "Yellow", "Pink");
console.log(colors);


//Insert two values, remove one
colors.splice(1, 1, "Purple", "Violet");
console.log(colors);

// toString() and join()

var colors = ["Red", "Green", "Blue"];

//Using toString() method 
console.log(colors.toString()); 

//Using join() method 
console.log(colors.join());
console.log(colors.join("")); 
console.log(colors.join("-")); 
console.log(colors.join(", "));

// slice()

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var newArr = fruits.slice(1, 3);

// concat()

var color1 = ["Red", "Green", "Blue"];
var color2 = ["White", "Orange"];
var colors = color1.concat(color2);

console.log(colors);





// Functions

// Calling a Function

function print() {
    console.log("Hello World");
}

print();

// Function Parameters

function greet(name) {
    console.log("Hi " + name);
}

greet("peter");
greet("Bobby");

// The return Statement

function add(a, b) {
    var c = a + b;
    return c;
}

var res = add(5, 4);
console.log(res);

// anonymous functions

var sample = function () {
    console.log('I'm Anonymous function');
};

sample();

// setTimeout


setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);


//function expression

var x = function () {
    console.log("x is called")
}

x();

//  Immediately Invoked Function Expression

var result = (function () {
    var name = "Barry";
    return name;
})();

console.log(result);

// Call back function

function callbackFunction(name) {
    console.log("hello" + name);
}
function outerFunction(callback) {
    let name = prompt("please enter your name");
    callback(name);
}
outerFunction(callbackFunction);