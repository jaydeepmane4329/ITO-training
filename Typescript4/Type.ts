// Genrics..
// Normal Function..
// function add(a:number, b:number) :number {
//     return a + b;
// }

// console.log(add(10,'jay'));

// // Genric function.
// function add<T>(data:T): T{
//     return data;
// }

// console.log(add({name:'jay', age:22}).age);


// Normal****
// const last  = (arr:number[]): number => {
//   return arr[arr.length - 1];
// }

// const l = last([1,2,3]);
// const l2 = last(['jay','jack','jane']);  //here number array cannot store string values.



// Genric function****
// const last = <T>(arr:T[]) : T[] =>{
//     return arr;
// }


// console.log(last([1,2,3,4]));
// console.log(last(['jay','jack','jane'])); //here string values can be store inside a number array because of genrics...





// ****Genric constraint..
// To extend the power of genric type...

// type person = {
//     firstName  : string,
// }


// let getPerson = <T extends person>(data : T) => {
//     return data;
// }

// const details =  {lastName : 'cena',firstName : 'jay',sallery : '50000'};
// console.log(getPerson(details));

// function getElement<O extends object, K extends keyof O>(obj:O,key:K){
//    return obj[key];
// }

// console.log(getElement(details,'sallery'));



// **Genric interfaces..
// Generic interfaces that describe object properties

// interface pair<K, V> {
//  key : K,
//  value : V
// }

// let month : pair<string,number> = {
//   key :'jan',
//   value : 1,
// }
// console.log(month);

// let user : pair<string,string> = {
//     key :'Name',
//     value : 'Jay',
// }

// console.log(user);

// Generic interfaces that describe methods***


//*Genric classes..
class DataStorage<T>{

    public data : Array<string> = [];

    addItem(item :T){
       this.data.push(item);
    }

    removeItem(item :T){
        this.data.splice(this.data.indexOf(item),1);
    }
    
    getItems(){
        return [...this.data];
    }
} 


const stringStorage = new DataStorage<string>();
stringStorage.addItem('jay');
stringStorage.addItem('jack');
stringStorage.addItem('jane');
stringStorage.removeItem('jay');

console.log(stringStorage);

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);

console.log(numberStorage);






