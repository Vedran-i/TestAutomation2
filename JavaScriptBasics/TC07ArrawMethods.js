let number = [1,2,3,4,5];
let newNumber =number.push(6,7,8,9,10);
console.log(number);


// push is like append in python.

/*
```javascript
// ============================================================
// JAVASCRIPT ARRAYS - METHODS AND EXAMPLES
// ============================================================


// ============================================================
// 1. CREATING AN ARRAY
// ============================================================

const fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits);


// ============================================================
// 2. LENGTH
// ============================================================

console.log(fruits.length);
// 4


// ============================================================
// 3. ACCESSING ITEMS
// ============================================================

console.log(fruits[0]);
// apple

console.log(fruits[2]);
// orange


// ============================================================
// 4. push()
// Adds item(s) to the END
// ============================================================

fruits.push("grape");

console.log(fruits);
// ["apple", "banana", "orange", "mango", "grape"]


// ============================================================
// 5. pop()
// Removes the LAST item
// ============================================================

const lastFruit = fruits.pop();

console.log(lastFruit);
// grape

console.log(fruits);
// ["apple", "banana", "orange", "mango"]


// ============================================================
// 6. unshift()
// Adds item(s) to the BEGINNING
// ============================================================

fruits.unshift("kiwi");

console.log(fruits);
// ["kiwi", "apple", "banana", "orange", "mango"]


// ============================================================
// 7. shift()
// Removes the FIRST item
// ============================================================

const firstFruit = fruits.shift();

console.log(firstFruit);
// kiwi

console.log(fruits);
// ["apple", "banana", "orange", "mango"]


// ============================================================
// 8. indexOf()
// Finds the position of an item
// ============================================================

console.log(fruits.indexOf("orange"));
// 2

console.log(fruits.indexOf("pear"));
// -1 (not found)


// ============================================================
// 9. includes()
// Checks whether an item exists
// ============================================================

console.log(fruits.includes("banana"));
// true

console.log(fruits.includes("pear"));
// false


// ============================================================
// 10. slice()
// Copies part of an array
// DOES NOT change the original array
// ============================================================

const someFruits = fruits.slice(1, 3);

console.log(someFruits);
// ["banana", "orange"]

console.log(fruits);
// Original is unchanged


// ============================================================
// 11. splice()
// Adds/removes items
// DOES change the original array
// ============================================================

const vegetables = ["carrot", "potato", "onion", "tomato"];

vegetables.splice(1, 1);

console.log(vegetables);
// ["carrot", "onion", "tomato"]


// Add an item

vegetables.splice(1, 0, "pepper");

console.log(vegetables);
// ["carrot", "pepper", "onion", "tomato"]


// ============================================================
// 12. forEach()
// Runs a function for every item
// ============================================================

fruits.forEach(function (fruit) {
    console.log(fruit);
});


// Arrow function version

fruits.forEach(fruit => {
    console.log(fruit);
});


// ============================================================
// 13. map()
// Creates a NEW array by changing each item
// ============================================================

const upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperFruits);

// ["APPLE", "BANANA", "ORANGE", "MANGO"]


// Example with numbers

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
// [2, 4, 6, 8, 10]


// ============================================================
// 14. filter()
// Creates a NEW array containing items that match a condition
// ============================================================

const bigNumbers = numbers.filter(number => number > 3);

console.log(bigNumbers);
// [4, 5]


// Example

const longFruitNames = fruits.filter(fruit => fruit.length > 5);

console.log(longFruitNames);
// ["banana", "orange"]


// ============================================================
// 15. find()
// Returns the FIRST item that matches a condition
// ============================================================

const foundNumber = numbers.find(number => number > 3);

console.log(foundNumber);
// 4


// ============================================================
// 16. findIndex()
// Returns the INDEX of the first matching item
// ============================================================

const foundIndex = numbers.findIndex(number => number > 3);

console.log(foundIndex);
// 3


// ============================================================
// 17. findLast()
// Returns the LAST item that matches a condition
// ============================================================

const lastBigNumber = numbers.findLast(number => number > 2);

console.log(lastBigNumber);
// 5


// ============================================================
// 18. findLastIndex()
// Returns the INDEX of the last matching item
// ============================================================

const lastBigNumberIndex = numbers.findLastIndex(number => number > 2);

console.log(lastBigNumberIndex);
// 4


// ============================================================
// 19. some()
// Checks if AT LEAST ONE item matches
// Returns true or false
// ============================================================

const hasBigNumber = numbers.some(number => number > 4);

console.log(hasBigNumber);
// true


// ============================================================
// 20. every()
// Checks if ALL items match
// Returns true or false
// ============================================================

const allPositive = numbers.every(number => number > 0);

console.log(allPositive);
// true


// ============================================================
// 21. reduce()
// Reduces an array to ONE value
// ============================================================

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
// 15


// Shorter version

const total2 = numbers.reduce((sum, number) => sum + number, 0);

console.log(total2);
// 15


// ============================================================
// 22. sort()
// Sorts an array
// CHANGES the original array
// ============================================================

const names = ["John", "Peter", "Anna", "David"];

names.sort();

console.log(names);
// ["Anna", "David", "John", "Peter"]


// Numbers need a special comparison function

const randomNumbers = [10, 5, 100, 2, 25];

randomNumbers.sort((a, b) => a - b);

console.log(randomNumbers);
// [2, 5, 10, 25, 100]


// Descending order

randomNumbers.sort((a, b) => b - a);

console.log(randomNumbers);
// [100, 25, 10, 5, 2]


// ============================================================
// 23. reverse()
// Reverses an array
// CHANGES the original array
// ============================================================

const letters = ["A", "B", "C", "D"];

letters.reverse();

console.log(letters);
// ["D", "C", "B", "A"]


// ============================================================
// 24. join()
// Combines array items into a string
// ============================================================

const words = ["Hello", "World"];

const sentence = words.join(" ");

console.log(sentence);
// "Hello World"


// ============================================================
// 25. concat()
// Combines arrays
// DOES NOT change the original arrays
// ============================================================

const vegetables2 = ["carrot", "potato"];
const fruits2 = ["apple", "banana"];

const food = vegetables2.concat(fruits2);

console.log(food);
// ["carrot", "potato", "apple", "banana"]


// ============================================================
// 26. flat()
// Flattens nested arrays
// ============================================================

const nestedNumbers = [1, 2, [3, 4], [5, 6]];

const flatNumbers = nestedNumbers.flat();

console.log(flatNumbers);
// [1, 2, 3, 4, 5, 6]


// ============================================================
// 27. flatMap()
// map() + flat()
// ============================================================

const numbers2 = [1, 2, 3];

const doubledArrays = numbers2.flatMap(number => [number, number * 2]);

console.log(doubledArrays);
// [1, 2, 2, 4, 3, 6]


// ============================================================
// 28. toString()
// Converts an array to a string
// ============================================================

const colors = ["red", "green", "blue"];

console.log(colors.toString());

// "red,green,blue"


// ============================================================
// 29. at()
// Gets an item by position
// Supports negative positions
// ============================================================

const animals = ["cat", "dog", "horse", "rabbit"];

console.log(animals.at(0));
// cat

console.log(animals.at(-1));
// rabbit


// ============================================================
// 30. Array.isArray()
// Checks whether something is an array
// ============================================================

console.log(Array.isArray(animals));
// true

console.log(Array.isArray("hello"));
// false


// ============================================================
// 31. Array.from()
// Creates an array from an iterable/object
// ============================================================

const text = "HELLO";

const letters2 = Array.from(text);

console.log(letters2);
// ["H", "E", "L", "L", "O"]


// ============================================================
// 32. Array.of()
// Creates an array from values
// ============================================================

const numbers3 = Array.of(10, 20, 30);

console.log(numbers3);
// [10, 20, 30]


// ============================================================
// 33. fill()
// Fills array positions with a value
// CHANGES the original array
// ============================================================

const emptyArray = [1, 2, 3, 4, 5];

emptyArray.fill(0);

console.log(emptyArray);
// [0, 0, 0, 0, 0]


// Fill only part of an array

const numbers4 = [1, 2, 3, 4, 5];

numbers4.fill(0, 1, 3);

console.log(numbers4);
// [1, 0, 0, 4, 5]


// ============================================================
// 34. copyWithin()
// Copies part of an array to another position
// CHANGES the original array
// ============================================================

const letters3 = ["A", "B", "C", "D", "E"];

letters3.copyWithin(0, 3);

console.log(letters3);
// ["D", "E", "C", "D", "E"]


// ============================================================
// 35. ENTRIES()
// Returns index + value pairs
// ============================================================

const cars = ["BMW", "Audi", "Toyota"];

for (const [index, car] of cars.entries()) {
    console.log(index, car);
}


// ============================================================
// 36. KEYS()
// Returns array indexes
// ============================================================

for (const index of cars.keys()) {
    console.log(index);
}


// ============================================================
// 37. VALUES()
// Returns array values
// ============================================================

for (const car of cars.values()) {
    console.log(car);
}


// ============================================================
// 38. WITH()
// Creates a NEW array with one item replaced
// Does NOT change the original
// ============================================================

const originalNumbers = [10, 20, 30];

const newNumbers = originalNumbers.with(1, 99);

console.log(originalNumbers);
// [10, 20, 30]

console.log(newNumbers);
// [10, 99, 30]


// ============================================================
// 39. toSorted()
// Sorts and creates a NEW array
// Original stays unchanged
// ============================================================

const scores = [50, 10, 30, 20];

const sortedScores = scores.toSorted((a, b) => a - b);

console.log(scores);
// [50, 10, 30, 20]

console.log(sortedScores);
// [10, 20, 30, 50]


// ============================================================
// 40. toReversed()
// Reverses and creates a NEW array
// Original stays unchanged
// ============================================================

const originalLetters = ["A", "B", "C"];

const reversedLetters = originalLetters.toReversed();

console.log(originalLetters);
// ["A", "B", "C"]

console.log(reversedLetters);
// ["C", "B", "A"]


// ============================================================
// 41. toSpliced()
// Like splice(), but creates a NEW array
// Original stays unchanged
// ============================================================

const originalFruits = ["apple", "banana", "orange"];

const newFruits = originalFruits.toSpliced(1, 1, "mango");

console.log(originalFruits);
// ["apple", "banana", "orange"]

console.log(newFruits);
// ["apple", "mango", "orange"]


// ============================================================
// 42. LOOPING THROUGH AN ARRAY
// Traditional for loop
// ============================================================

const students = ["Anna", "John", "Peter"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// ============================================================
// 43. for...of
// Usually easier when you just need the values
// ============================================================

for (const student of students) {
    console.log(student);
}


// ============================================================
// 44. for...in
// Gives you the INDEX
// Usually avoid using this for arrays
// ============================================================

for (const index in students) {
    console.log(index);
}


// ============================================================
// 45. PRACTICAL EXAMPLE WITH OBJECTS
// Very useful for Playwright/test automation
// ============================================================

const users = [
    {
        username: "john123",
        password: "test123",
        balance: 100
    },
    {
        username: "anna456",
        password: "test456",
        balance: 250
    },
    {
        username: "peter789",
        password: "test789",
        balance: 500
    }
];


// for...of

for (const user of users) {

    console.log(`Username: ${user.username}`);
    console.log(`Password: ${user.password}`);
    console.log(`Balance: ${user.balance}`);

}


// ============================================================
// 46. FILTER OBJECTS
// ============================================================

const richUsers = users.filter(user => user.balance > 200);

console.log(richUsers);


// ============================================================
// 47. FIND AN OBJECT
// ============================================================

const john = users.find(user => user.username === "john123");

console.log(john);


// ============================================================
// 48. MAP OBJECTS
// Get only the usernames
// ============================================================

const usernames = users.map(user => user.username);

console.log(usernames);

// ["john123", "anna456", "peter789"]


// ============================================================
// 49. SOME WITH OBJECTS
// Does at least one user have more than 400?
// ============================================================

const hasLargeBalance = users.some(user => user.balance > 400);

console.log(hasLargeBalance);
// true


// ============================================================
// 50. EVERY WITH OBJECTS
// Do all users have a balance greater than 0?
// ============================================================

const everyoneHasMoney = users.every(user => user.balance > 0);

console.log(everyoneHasMoney);
// true


// ============================================================
// QUICK SUMMARY
// ============================================================
//
// Add/remove:
// push()       → add to end
// pop()        → remove from end
// unshift()    → add to beginning
// shift()      → remove from beginning
// splice()     → add/remove anywhere
//
// Search:
// indexOf()     → find position
// includes()    → check if exists
// find()        → find first matching item
// findIndex()   → find index of first match
// findLast()    → find last matching item
// findLastIndex() → find index of last match
//
// Transform:
// map()         → transform every item
// flat()        → flatten nested arrays
// flatMap()     → map + flatten
//
// Filter/check:
// filter()      → keep matching items
// some()        → at least one matches
// every()       → all match
//
// Reduce:
// reduce()      → turn array into one value
//
// Sort/reverse:
// sort()        → sort original array
// reverse()     → reverse original array
// toSorted()    → sort without changing original
// toReversed()  → reverse without changing original
//
// Combine/convert:
// concat()      → combine arrays
// join()        → array → string
// Array.from()  → create array from iterable
// Array.of()    → create array from values
//
// Other:
// slice()       → copy part of array
// at()          → get item by position
// fill()        → fill with a value
// copyWithin()  → copy items inside array
// with()        → replace item without changing original
// toSpliced()   → splice without changing original
// ============================================================
```

*/


