// Variable Declaration...
// function printNum(){
//     for(let i=0;i<5;i++){  //defined let-> let has block scope 
//         console.log(i);                                     //-
//     }                                               //-
//                                             //-
//     console.log(`outside the scope ${i}`); // so it can not access this i ... Typescript compiler converted ( let into var);
// }
// -------------------------------------------------------------------
// Types in TypeScript...******
// let myNum : Number = 10;
// console.log(myNum);
// let myStr : string = "jay;"
// console.log(myStr);
// let myBol : boolean = true;
// console.log(myBol);
// let arr :string[];
// arr=['jay','sharma'];
// console.log(arr);
// let arr2 : number[];
// arr2=[10,20];
// console.log(arr2);
// let anyType : any;
// anyType = 'jhon';
// console.log(anyType);
// let myName = "JAydeep";
// console.log(myName);
// ------------------------------------------------------------
// ****Type Assertion...
// Two types of Type assertion..
// 1. 'as' keyword 
// 2.angular Bracket <>;
// let sample;
// sample = 'Jaydeep';
// let len = (<string>sample).length;
// console.log(len);
// console.log((<string>sample).length);
// (sample as string).length
// console.log((sample as string).length)
// ----------------------------------------------------------------------------
// Interface in Typescript..*****
/* 1.
let sample = (firstName, lastName) =>{
    console.log(firstName + " "+ lastName);
}


sample('Jaydeep', 'mane');
sample(55,'mane');

*/
/*2.
let sample2 = (firstName : string,lastName : string) => {
    console.log(firstName + "  " +  lastName);
}

sample2('jaydeep','mane');
sample2(55,'mane'); //Error will occcur
*/
// interface Sample{
//     firstName : string;
//     lastName : string;
//     age : Number;
// }
// let sample = (sample : Sample) => {
//    console.log(`my name is ${sample.firstName} ${sample.lastName} and i am ${sample.age} years old`);
// }
// sample({
//     firstName : 'jay',
//     lastName:'mane',
//     age:23,
// })
// ---------------------------------------------------------------------------
// **Inline Type annotations..
// let sample = (namePro : {firstName : string, lastName :string, age : Number}) => {
//    console.log(`my name is ${namePro.firstName} ${namePro.lastName} and i am ${namePro.age} years old`);
// }
// sample({
//     firstName : 'jay',
//     lastName:'mane',
//     age:23,
// })
// ---------------------------------------------------------------------
//  classes*****
// class Sample{
//     firstName : string;
//     lastName : string;
//     age : Number;
//     getFirstName(){
//     }
//     getLastName(){
//     }
// }
// ----------------------------------------------
// **Objects in Typescript....
// class sample {
//     firstName : string;
//     lastName  : string;
//     age : 22;
//     getFirstName(){
//    console.log("MY firstName is" + this.firstName)
//     }
//     getLastName(){
//     }
// }
// let Obj = new sample();
// Obj.firstName = 'jay';
// Obj.getFirstName();
// -----------------------------------
// constructor****; Optional Parameter***
// class sample{
//     firstName : string;
//     lastName : string;
//     age :Number;
//     constructor(firstName:string,lastName:string,age?:number){ // ? is used to make paramter optional.
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.age = age;
//     }
//     getFirstName(){
//       console.log(`my name is ${this.firstName} ${this.lastName} and  I am ${this.age} years old`)
//     }
//     getLastName(){
//     }
// }
// let Obj = new sample('jay','sharma');
// Obj.getFirstName()
// ----------------------------------------------------------------------------
// Access Modifiers in Typescript...
// Public,private,protected.
// class Sample {
//     constructor(private firstName: string, private lastName: string, private age: number) {
//     }
//     getName() {
//         console.log(`firstName is ${this.firstName} last name is ${this.lastName} and age ${this.age}`)
//     }
// }
// let Obj = new Sample('jhon', 'cena', 22);
// Obj.getName();
//--------------------------------------------------
// Type inference,type assignment.
// let items = [1, 2, 3, null];
// let item = [0, 1, null, 'Hi'];
// let arr = [new Date(), new RegExp('\d+')];
// Tuples -Type 
// If we want limited and dertermined data.
// exapmle only two data one is number and second is string.
// Below is the example.
// let person: {
//     name:string;
//     age:number;
//     hobby : string[];
//     roll:[number,string] //exapmle of tuple.
// } = {
//     name : 'jay',
//     age: 31,
//     hobby : ['cricket','chess'],
//     roll:[2,'author'],
// }
// person.roll.push('jay');
// ENUMS...
