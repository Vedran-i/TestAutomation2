// if
// if else
// if else if
// switch case



if (true){
    console.log("im in if block");
}

console.log("********************************************************");

if(1==0){
    console.log("this is for 1=0");
}
else{
    console.log("im in else block");
let day = "Tuesday";

//= assignment
//== equality, chekcing if something is equal
//=== strict equality

console.log("********************************************************");

if (day == "Monday") {
    console.log("im in monday");
}
else if (day == "Tuesday") {
    console.log("im in tuesday");
}
else if (day == "Wednesday") {
    console.log("im in wednesday");
}
else if (day == "Thursday") {
    console.log("im in thursday");
}}

// switch is used to perform different actions based on different conditions. It is an alternative to using multiple if else statements. The switch statement evaluates an expression and matches the value of the expression to a case clause, and executes the associated block of code.
switch(day){
    case "Monday":
        console.log("im in monday");
        break;
    case "Tuesday":
        console.log("im in tuesday");
        break;
    case "Wednesday":
        console.log("im in wednesday");
        break;
    case "Thursday":
        console.log("im in thursday");
        break;
    default: //default means if none of the above cases match, then execute this block of code. It is optional and can be omitted if not needed.
        console.log("im in default");
}

switch(1){
    case 1:
        console.log("im in case 1");
        break;
    case 2:
        console.log("im in case 2");
        break;
}

let browser = "Chrome";
switch(browser){
    case "Chrome":
        console.log("im in chrome");
        break;
    case "Firefox":
        console.log("im in firefox");
        break;
    default:
        console.log("im in default");
}       

// under beaker icon, under tools, you can use record button to record your actions on the browser and it
//  will generate the code for you. You can use that code to create your own test cases. It is a very useful feature of playwright.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type a number: ", (choice) => {

    if (choice === "1") {
        console.log("hi");
    } else if (choice === "2") {
        console.log("bye");
    } else {
        console.log("error");
    }

    rl.close();
});