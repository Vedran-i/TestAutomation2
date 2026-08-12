//Ways to create func in js 
function add(a, b){
    let c = a + b;
    console.log(c);
}

add(true, false); //function call with boolean values 0= false, 1=true

add(true, "false"); //function call with boolean and string values, it will give 1false

add(10, 20); //function call with number values

function areaOfSquare(side){
    let area = side * side;
    console.log(area);
}

areaOfSquare(10); //function call with number values
areaOfSquare(20)

//arrow function
const areaOfRectangle = (l, b) => {
    let area = l * b;
    console.log(area);
};

areaOfRectangle(10, 20); //function call with number values



//session 2
console.log("session 2");

const addTwoNumbers1 = function addFn(a, b){

return a + b;   
}

console.log(addTwoNumbers1(10, 20));