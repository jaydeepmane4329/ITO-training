// console.log("Jaydeep");


// finding Html elements.
// let sample = document.getElementById('sample');
// console.log(sample);


// let sample =document.getElementsByTagName('h1');
// console.log(sample);

// let sample = document.getElementsByClassName('sample');
// console.log(sample)

// let sample = document.getElementById('sample');
// sample.innerHTML =  'jay';

// let sample = document.getElementById('sample');
// sample.style.color = "red";

// let sample = document.getElementById('sample');
// sample.setAttribute('class', 'jay');
// console.log(sample);

let parent = document.getElementById('parent');
console.log(parent);


let element = document.createElement('p');
element.innerHTML = 'jay'
parent.appendChild(element);

let Name = document.createElement('p');
Name.innerHTML = 'Mane';
parent.appendChild(Name);
console.log(Name);

// parent.removeChild(element);

parent.replaceChild(Name, element)









