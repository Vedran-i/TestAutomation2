var name = "John";
console.log(name);

var number1 = 1
var number2 = 2

console.log(number1 + number2);
//js 3 major keyword for variables:
//var, let, const

let m1 = 200;
console.log(m1);

const m2 = 300;
console.log(m2);

let m4 = true;
console.log(m4);

/*VAR
it can be reassigned and redeclared
it is function scoped
*/

var firstName = "John";
console.log(firstName);

firstName = "Doe"; //reassigned
console.log(firstName);

var firstname = 200; //redeclared
console.log(firstname);

/*LET
1. it can be reassigned but cannot be redeclared
2. it is block scoped
*/

/*CONST
1. it cannot be reassigned and redeclared
2. it is block scoped
*/

function addTwoNumber(){
var a = 10;
var b = 20;
var c = a + b;
console.log(c);
}
addTwoNumber(); //function call
// a pair of curly braces is called a block

console.log(a); // a is not accessible outside the function, it is function scoped

let decimal = 10.67;
console.log(decimal);
decimal1 = 10.99; //resassigned
console.log(decimal1);
let decimal1 = 20.99;
console.log(decimal1); //redeclared, it will give error

{
let decimal3 = 39.44
console.log(decimal3);
}

console.log(decimal3); //decimal3 is not accessible outside the block, it is block scoped

const a1 = 10.66
console.log(a1);
a1 = 9895; //error, const cannot be reassigned

an=true;
console.log(an);
console.log(typeof an);