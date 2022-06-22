// Dom Manupulation. 
let content = document.getElementById('sample');

function change() {
  content.innerHTML = "Hi There";
}
console.log(content);

// Drag And Drop

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log("dragging");
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


// Functions 

// function Defination 

function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4,3);
console.log(x);

// function expression

const y = function (a,b) {return a * b};
let z = y(5,5);
console.log(z);

// constructor function 
const newFunction = new Function("a", "b", "return a * b");

let n = newFunction(4, 37);
console.log(n);


// Hoisting - we can call before initialization..
document.write(myFunction3(5));

function myFunction3(y) {
  return y * y;
}

// self invoking 
(function () {
  console.log("Invoke ");
})();

//  Local storage
localStorage.setItem('Name', 'jaydeep')
console.log(localStorage.Name)
localStorage.clear();
let name = localStorage.getItem("Name");
console.log(name);


localStorage.removeItem("Name");
localStorage.removeItem("Name");
localStorage.removeItem("Name");
console.log(name);


let impArray = ['banana','orange','onion'];

localStorage.setItem('fruits', JSON.stringify(impArray));

let fruits = localStorage.getItem('fruits');
console.log(fruits);

fruits = JSON.parse(localStorage.getItem('fruits'));
console.log(fruits);

// Session storage.
sessionStorage.setItem("sessionName","jay");
sessionStorage.setItem("sessionNam2","123");
sessionStorage.setItem("sessionNam3","555");

sessionStorage.clear();




