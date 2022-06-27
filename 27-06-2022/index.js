
//  Higher order functions.

// forEach().

let arr = [10, 21, 30, 40, 50];

let newArr = arr.forEach((item) => {
    return item + 1;
})

arr.forEach((item, index) => {
    document.write(index + " " + " : " + item);
})

console.log(newArr); //undefined 
//------------------------------------------------

// filter().

let filteredArray = arr.filter((item) => {
    return item % 2 != 0;
})

console.log(filteredArray);

let filterArr = arr.filter((item) => item % 2 === 0);
console.log(filterArr);


// map().
let binaryArray = arr.map((item) => item.toString(2));
console.log(binaryArray);

// Reduce();
let Samplearr = [10, 10, 50];
let output = Samplearr.reduce((acc, curr) => acc + curr, 0)
console.log(output);

let stringArr = ["jay", "amit", "pavan"];

let newStrgArr = stringArr.reduce((acc, curr) => acc + " " + curr, "");
console.log(newStrgArr);

// More Examples..
// map
const users = [{ firstName: "jay", lastName: "jack", age: 22 },
{ firstName: "abhi", lastName: "sharma", age: 30 },
{ firstName: "john", lastName: "sena", age: 22 },
{ firstName: "jack", lastName: "kalis", age: 50 },
];

const output1 = users.map((x) => x.firstName + " " + x.lastName);

console.log(output1)

const output2 = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(output2);


let obj = {};

obj[26] = 1;
console.log(obj);

obj[26] = ++obj[26];
console.log(obj);

//filter()

let output3 = users.filter((item) => {
    return item.age > 25
}).map((item) => {
    return item.firstName
});

console.log(output3);



// EcmaScript Practice...


// let,const,var*****

// var name = "jay"
// name = "sharma";
// console.log(name);

// let name = "jay"
// name = "sharma";
// console.log(name);

// const name = "jay"
// name = "sharma";
// console.log(name);

// template leterals ******
let firstName = "jay";
let lastName = "sharma";

console.log(`${firstName} ${lastName}`);

// ES6 string methods.****
console.log(`${firstName}`.startsWith('j'));
console.log(`${firstName}`.endsWith('y'));
console.log(`${firstName}`.includes('N'));
console.log(`${firstName} ${lastName} `.repeat(10));


// Array Destructuring.******

// before ES6 
let myFavLanguage = ['javascript','java','php','c','c#'];

// let top1 = myFavLanguage[0];
// let top2 = myFavLanguage[1];
// let top3 = myFavLanguage[2];

// console.log(top1);
// console.log(top3);

// After ES6

// let [top1,top2,top3] = myFavLanguage;
// console.log(top1);
// console.log(top3);

let [top1,top2,top3,,top5] = myFavLanguage;

console.log(top5);


// Object Destructuring.

let obj1 = {
    name : "jay",
    age : 22,
    hobbies: {
        first : 'Playing Chess',
        second: 'watching cricket',
    }
}


let {name,age,hobbies} = obj1;

console.log(`my name is ${name} and my age is ${age} my hooby is ${hobbies.first}`);


// Arrow functions .
// const sum = (a,b) => a + b;

// console.log(sum(10,20));


// Default Parameters./******* */

// before ES6

// function sum(a,b){
//     console.log(a * b);
// }

// sum(10); // 10 * undefined = NaN. 


// function sum(a,b){
//     if(b === undefined ? b = 1 : b = b);
//     console.log(a * b);
// }

// sum(10); //10 * 1 = 10;

// after ES6..
// default parameter
let sum = (a,b = 10) => a * b;


console.log(sum(10));



// *********Rest Parameter.

// Es5

// function add(a,b,c,d,e,f){
//     console.log(a+b+c+d+e+f);
// }

// add(1,2,3,4,5,6);

// ES6
function add(...inputs){
   return  inputs.reduce((acc,curr) => acc + curr,0);
}

console.log(add(1,2,3,4,5,6,7,8,9,10));


function fun(a,b,...c){
   console.log(`${a} ${b}`); // jay deep
   console.log(c); // [virat,dhoni,rohit,edan]
   console.log(c[0]); //virat
   console.log(c.length); //4
   console.log(c.indexOf('Edan')); //3
}

fun('jay','deep','virat','dhoni','rohit','Edan');



// Spread Operator..*********

// 1.To pass arguments.
// ES5

// function summation(a,b,c){
//     console.log(a+b+c);
// }

// summation(10,20,30);
let items = [10,20,30];
// function summation(a,b,c){
//     console.log(a+b+c);
// }

// summation.apply(null,items);

// ES6=>spread operator.

function summation(a,b,c){
    console.log(a+b+c);
}
summation(...items);

// 2.To concat..

// ES5
let arr2 = [10,20,30,40,50];
let arr3 = [60,70,80,90,100];

let arr4 = arr2.concat(arr3);

console.log(arr4);

// ES6 Spread operator..

let arr5 = [10,20,30,40,50];
let arr6 = [60,70,80,90,101];

arr5 = [...arr5,9,...arr6,10];
console.log(arr5);

// 3.to copy

// ES5
let arr7 = [10,20,30,40,50];
let arr8 = arr7;

arr8.push(18,19);// it pushed in both the array 

console.log(arr7);
console.log(arr8); 

// to prevent this issue we use spread operator to copy

let arr9 =  [10,20,30,40,50];
let arr10 = [...arr9];

arr10.push(1,2,3); // it pushed only in arr10  array.

console.log(arr9);
console.log(arr10);



