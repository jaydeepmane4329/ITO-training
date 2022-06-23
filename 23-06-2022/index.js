// Javscript Array ..
let colors = [
    'yellow',
    'red',
    'orange',
]

for (let color of colors) {
    console.log(color);
}

// Array Methods

// join Method
const fruts = ["Banana", "Orange", "Apple", "Mango"];
let newOne = fruts.join("*");
console.log(newOne);

// pop(),push(),
let names = ['jay', 'roy', 'jack']
console.log(names);
console.log(names.pop());
console.log(names.push('jhon'));
console.log(names)

// shift(),unshift()
names.unshift('rose');
console.log(names);
console.log(names.shift());
console.log(names.unshift());
console.log(names);

// length
console.log(names.length)

// concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = ["Robin", "Morgan"];

// Splice 
const arr5 = ["Emil", "Tobias", "Linus"];
console.log(arr5.splice(2, 0, "jay", "jack"));
console.log(arr5);

// Slice
console.log(arr5);
console.log(arr5.slice());
console.log(arr5.slice(-4));

const myChildren = arr1.concat(arr2, arr3, arr4)
console.log(myChildren);

// Javascript Objects.

let fruits = {
    banana: 'yellow',
    apple: 'red',
    orange: 'orange',
}

// keys,values,entries
let keys = Object.keys(fruits);
console.log(keys)

let values = Object.values(fruits);
console.log(values);

let entries = Object.entries(fruits);
console.log(entries);

// Fecth Api 

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            //    document.write(data[i].title + "<br/>");
        }
    });


// Dates 
let date = new Date();
document.write(date);

// Javascript BOM.
window.alert("jay");


// Settimeout and set time interval

function greet(name, byetext) {
    console.log("Hello Good Morning " + name + " " + byetext);
}
// timeOut = setTimeout(greet, 5000,"jay ","take care");

// clearTimeout(timeOut);

// intervalOut = setInterval(greet,1000,'jay','take care');

// clearInterval(intervalOut)

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

id = setInterval(displayTime, 1000);

function stop() {
    clearInterval(id);
}









