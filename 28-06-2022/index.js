console.log("connected");

// MATH OBJECT....ES6

// sign();

let number = 5.456;
let n = -5.2;
let num = 0;
let num1 = -0;
let str = 'jay';


console.log(Math.sign(number));
console.log(Math.sign(n));
console.log(Math.sign(num));
console.log(num1);
console.log(Math.sign(str));

// Math.trunc
console.log(Math.trunc(number));
console.log(Math.floor(number));
console.log(Math.floor(n));

// exponential Operator ES6.
let a = 5;
let b = 3;

console.log(a ** b);


// Number and Global Methods..

let num2 = 5;
let num3 = Infinity;
let num4 = NaN;
let num5 = -5;
console.log(isFinite(num2));
console.log(isFinite(num3));
console.log(isFinite(NaN));
console.log(isFinite(num5));

console.log(isNaN(num));
console.log(isNaN('jay'));

console.log(Number.isInteger(1.0));
console.log(Number.isInteger('jay'));


// classes, Object,Inheritance, OOPS.

class Student {
    constructor(name, age, cls) {
        this.name = name;
        this.age = age;
        this.cls = cls;
    }

    bioData() {
        return `my name is ${this.name} my age ${this.age} and I am in a ${this.cls}`
    }
}

class Player extends Student {
    constructor(name, age, cls, game) {
        super(name, age, cls);
        this.game = game;
    }

    player() {
        return `${super.bioData()}. I am a ${this.game} player.`
    }
}

let obj1 = new Player('jay', 22, 'B.Tech', 'football');
console.log(obj1.player());

// Promises..
const pobj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let roll_No = [1, 2, 3, 4, 5];
        resolve(roll_No);
        // reject("error occuring")
    }, 2000);
});

const getBioData = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            let biodata = {
                name: 'jay',
                age: 24,
            }
            resolve(`My roll no is ${indexdata} . My name is ${biodata.name} i am ${biodata.age} years old`);
        }, 2000, indexdata);
    })
}

// Promise consume
pobj1.then((roll_No) => {
    console.log(roll_No);
    return getBioData(roll_No[2]);
}).then((kuchbhi) => {
    console.log(kuchbhi)
}).catch((error) => {
    console.log(error);
})


// Async & Await...*****

async function getAllData() {

    // Error Handling.. try-catch Block..
    try {
        let data = await pobj1;
        console.log(data);

        let bioDatas = await getBioData(data[1]);
        //    console.log(bioDatas);

        return bioDatasa;
    } catch (error) {
        console.log(`error is ${error}`)
    }

}


// console.log(getAllData());
let getName = getAllData().then((res) => {
    console.log(res);
})


// closures******

// 1.example
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }

//     y();
// }

// x();


// 2.exapmle
// function x(){
//     a=9;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// let z = x();
// z();

// 3.example
function z(){
    a = 10;
    function y(){
        b = 10;
        function x(){
       console.log(a,b);
        }
        x();
    }
    y();
}

z();



