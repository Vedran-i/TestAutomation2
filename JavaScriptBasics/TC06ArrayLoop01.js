let empName = ['Sachin', 'Rahul', 'Dhoni', 'Kohli', 'Raina'];

for (let i of empName) {
    console.log(i);
}

for (let i in empName) {
    console.log(empName[i]);
}

let data = [1, "Name", true, 10.5];

for (let x of data) {
    console.log(x);
}

//search in array


function search(element, array)
{
    let flag = false;
    for(let i = 0; i<array.length; i++)
    {
        if(array[i] == element)
        {
            console.log(`Element ${element} found at index ${i}`);
            flag = true;
            break;
        }
    }

    if(flag == false)
    {
        console.log(`Element ${element} NOT found in the array`);
    }
}

let arrayValue = [1,2,3,4,5,6,7,8,9,10];
let searchValue = 5;
search(searchValue, arrayValue);