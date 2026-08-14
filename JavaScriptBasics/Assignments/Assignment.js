//Assignments 

// 1. get the sum of first 100 numbers

let sum = 0;
for (let i = 0; i <= 100; i++)
{
    sum = sum + i;
}
console.log(sum);


// 2. reverse the number 3982

let num = 3982;
let reversed = 0;

while (num > 0) {
    let digit = num % 10; // 1st loop :2 2ndloop: 8 3rd loop: 9 4th loop: 3
    reversed = reversed * 10 + digit; //0*10+4 = 4
    num = Math.floor(num / 10); //1234/10= 123
}

console.log(reversed); 


// 3. reverse string - Javascript

let string = "Javascript";
let reverse_string = "";
let stack = [];

for (let char of string) { //push all characters onto the stack starting from the first character. 
    stack.push(char);
}

while (stack.length > 0) { //Pull from stack and put into empty string variable. LIFO so "t" -> "s" -> "c" etc
    reverse_string += stack.pop();
}

console.log(reverse_string);


// EXTRA

for (let x = 1; x<=101; x++)
{
    if (x % 3 === 0 && x % 5 === 0){
    console.log(`${x} FIZZ BUZZ`);}

    else if (x % 3 === 0){
    console.log(`${x} fizz`);}
    
    else if (x % 5 === 0){
    console.log(`${x} buzz`);}

    else{
    console.log(x);}}
