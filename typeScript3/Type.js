// Enum..*****
// Enum is one type of (custom) fixed data types ;
// It can not accept any data apart from whatever we have declared while initialization.
// enum days { 
//     SUN,MON,TUE,WED,THU,FRI,SAT
// }
// const day: days = days.MON;
// if(day === days.MON){
//    console.log("This is Monday");
// }else{
//     console.log("This is Not a Monday");
// }
// --------------------------------------------------
// Never Type..****
// function sample() : never{
//      while(true){
//     }
// }
// function throws(): never{
//     throw new Error('something went wrong');
// }
// console.log(throws());
// ------------------------------------------------------------
// Union Type.******
// Union type is used when you want two diffrent types united..
// function sum(a:string, b:string | number) : number{
//     return parseInt(`${a}`) + parseInt(`${b}`);
// }
// console.log(sum('1000',2000));
// ---------------------------------------------------
//***Type alias in Typescript****
// Declare a type as a variable and reuse it..
// let varType : string | number | undefined; 
// let a = varType = 10;
// let b = varType = 'jay';
// let c = varType = undefined;
// let d = varType = true; --> Here it will give error because in varType there is no bollean type declared..as type alias.
// --------------------------------------------
// ***String Literal types..
// Apply value rather than Applying types to the variable or type.
// we apply values as a type.
// function combine(a:number | string , b:number | string, c : 'as-string' | 'as-number'){
//     if(c == 'as-number'){
//         return +a+(+b);
//     }else{
//         return a.toString() + b.toString();
//     }
// }
// let output1 = combine(10,20,'as-number');
// let output2 = combine('jay','deep','as-string');
// console.log(output1);
// console.log(output2);
// ------------------------------------------------------------
// CONTROL FLOW STATEMENTS
// If else..
// Switch case
// let Target = '1';
// switch(Target){
//     case 'monday':
//         console.log(Target);
//         break;
//     case 'tuesday':
//         console.log('tue');
//         break;
//     case 'wednesday':
//         console.log('wed');
//         break;
//     case '1':
//         console.log('thu');
//         break;
//     default :
//          console.log('anyday');                    
// }
// let i = 0;
// for (; ;) {
//     console.log(i);
//     i++;
//     if (i > 9) break;
// }
// let list = document.getElementById('list');
// while(list?.firstChild){
//     list?.removeChild(list.firstChild);
// }
// -------------------------------------
// Functions...
// Optional Paramters
// function add(a:number, b:number,c?:number){
//     return a + b;
// }
// let sum = add(10,10);
// console.log(sum);
// Default Paramter.
// Rest Parameter
// Function Overloading..
// Read Only Property..
// function showTime(){
// console.log("jay");
// }
//  let id = setInterval(showTime,1000);
// function stop(){
//   clearInterval(id);
// }
// setTimeout(stop,10000);
// -----------------------------------------------------------
// Static Methods and properties..****
// Static property***
// class Sample{
//     static employeeCount : number = 0;
//     constructor(private firstName :string, private lastName : string,private age :number){
//     Sample.employeeCount++;
//     }
// }
// let jay = new Sample('jay','sharma',22);
// let jack = new Sample('jack','jane',22);
// console.log(Sample.employeeCount);
// Static Method**
// class Employee{
//     private static headCount : number = 0;
//     constructor(private firstName : string, private lastName :string, private age ?: number){
//         Employee.headCount++;
//     }
//     static getHeadCount(){
//         return Employee.headCount;
//     }
// }
// let jay = new Employee('jay','sharma',);
// console.log(Employee.getHeadCount());
// ------------------------------------------------
// abastract class And Methods..
// abstract class Department{
//    abstract describe() : void;
// }
// class HRdepartment extends Department{
//    describe(){
//        console.log('this is Hr Department...')
//    }
// }
// class ITDepartment extends Department{
//     describe(){
//        console.log("This is IT department");
//     }
// }
