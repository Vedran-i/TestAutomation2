//Assignments 

// 1. get the sum of first 100 numbers

let sum = 0;
for (let i = 0; i <= 100; i++)
{
    sum = sum + i;
}
console.log(sum);


let i = 3982;
let rvs = i.toString().split('').reverse().join('');
console.log(rvs);


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


// 4. check even or odd

for (i=0; i<100; i++){
    if (i % 2 == 0)
        console.log(`${i}" is Even"`)
    else{console.log(`${i}" is Odd"`)}
}

// 5. check largets number

let array = [10, 25, 15];

if (array[0]>array[1]){console.log(`${array[0]}is the biggest`)}

else if (array[1]>array[2]){console.log(`${array[1]} is the biggest`)}  
  
else{console.log("false")}


// 6. 
//count vowels
let vowels = ["a", "i", "u", "e", "o"];
let string6 = "Automation";
let counter = 0;

for(char of string6){
  if(vowels.includes(char.toLowerCase())){counter +=1}
}
console.log(counter)


// 7. 
//check if a word is a palindrome
let word1 = "madam";
let palindrome = true;

for (let i = 0; i < word1.length / 2; i++) {
  if (word1[i] !== word1[word1.length - 1 - i]) {
    palindrome = false;
    break;
  }
}

if (palindrome == true) {
  console.log("it is a palindrome");
} else {
  console.log("not a palindrome");
} 

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


