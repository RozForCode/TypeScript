let a:number;//alwys give types to variables avoid any whereever possible
let c:boolean;
let v:[];
let d= [1,2,3,"hey"];
// now ts is not sure what type is in the array
let f:[number,string,boolean] = [1,"string",false];
// this means f is array with only 3 variables with the given type... making it a tuple
// loophole - later on you can push elements into the array of any type and amount.... cause code will be converted into js

// unknown type - similar to any 
// never - never used... for something like infinite loops like error and code stops compiling
// void - for functions that return nothing

// ENUMS
enum Direction{
    up="UP",
    left="LEFT",
    down="DOWN",
    right="RIGHT"
}
console.log(Direction.down+Direction.right)

// type inference - when variables get initialized at declaration ts infers the type of the variable ... thats kind of all
// union types - giving two or more types to a variable to avoid errors
let variable:string | null; // now vs autosuggestion for functions will only show functions that are common to both types
// to handle that use check typeof
// if(typeof variable === 'string'){
//     //inside this block all suggestion for string will appear
// }
// this inside a function

function abcd(variable: number | string){
    if(typeof variable ==='number'){
        variable.toFixed(2);
    }
    console.log(variable);
}
abcd(variable);

// intersection types
let q:number|string; // union - either of these
type Class = {
    section:string
}
type Students = {
    name:string
}
type Classmates = Class & Students;
// example of interseciton variable .... properties name need to be the same
let A: Classmates = {
    name:"abdc",
    section:"100"
}

type city = {
    name:string,
    population:number
}
type State = {
    Name:string,
    cities:number
}
type CityInState = city & State;
let B: CityInState={
    name:"Brampton",
    Name:"Ontario",
    population:122222034,
    cities:120
}
// tsc --init -> creates ts.config.json
// to control where compiled files go change outDir path
// tsc --watch -realtime compiling


// Type Aliases - primitive - making types using primitive data types and object-examples above
// primitive
type BigNum = number;
// object
type Human = {
    Name:string,
    Age:string,
}

// Interfaces
interface User{
    name:string,
    username:string,
    age:number
}
interface User{
    email:string
}
interface SeriousUser extends User{
    premiumId:boolean
}
function getUser(user:SeriousUser){
    user.name.charAt(0);
}

// Classes 
class Airpod{
    // no need to use keywords like let, function
    price = 25000;
    image="images/airpod"
    discount(x:number){
        console.log(this.price-((x/100)*this.price))
    }
    playMusic(Music:string){
        console.log(Music);
    }
}

// Class extends similar to interface
// Class with constructors
class Pendrive{
    public company:string;
    // only variables declared above the constructor can be initialized
    // or use membership keyword/access modifiers (default public) in the construtor argument 
    constructor(company:string, public price:number){
        this.company = company;
        this.price = 25000;
    }
}
// protected variable can be used in extended classes
// cool function example
function greeter(fn:(a:string)=> void):void{
    fn("Hello, World");
}
// readonly properties
class ABcd{
    constructor(public readonly name:string){// name value cannot be changed but can be accessed anywhere i.e not set method
        this.name = name;
    }
}
// named, anonymous, arrow , explicit/implicit return types/ option/default parameters, rest parameters

function xor():void{
console.log('hello')
}

// example of anonymous function invoked immediately

const result =  (():string=>{
return ('hello')
})();
console.log(result)


// example of complex anonymous function
type Employee = {
    id:number;
    name:string;
}
const users: Employee[] = [
    {id:1,name:"Alice"},
    {id:2, name:"Greg"}
];

function processEmployees(
    employees: Employee[],//first argument normal employee type array
    processor: (employee:Employee)=> Partial<Employee> // second argument function that takes employee type variable and returns part of that variable
): Partial<Employee>[]{
    return employees.map(processor);
}// processEmployees function takes Employee type variable and return same array but with partial of original values.. that partial being decided by the anonymous or any function provided

let anonymizedUsers : Partial<Employee>[];
anonymizedUsers = processEmployees(users, (anything)=>{
    return {
        id:anything.id
    };
})
console.log(anonymizedUsers);


// working with optional parameters
function consent(name:string,age?:number,gender?:string){
     let a = `Name: ${name}`;
     if(age) a+= ` Age: ${age}`
     if(gender) a+= ` Gender: ${gender}`
     console.log(a)
}
// working with default parameters
function consent2(name:string,age?:number,gender:string="Prefer not to say"){
     let a = `Name: ${name}`;
     if(age) a+= ` Age: ${age}`
     a+= ` Gender: ${gender}`
     console.log(a)
}

// REST  parameters - when you don't know the no.of arguments
function names(...names:string[]){
    console.log(names);
}

// Modules - import and export

export const PI = 3.14;
// to import this import {PI} from "./scripts.ts"

// Type Assertions 
function BIJ(para:HTMLDivElement){// OR HTMLPARAElement - basically whatever type of element it is use that more specific the better
    // (document.querySelector("p") as  HTMLParagraphElement).after
    // or 
    // <HTMLParagraphElement>document.querySelector("p").after
}

// Literals Types - string, boolean, number
let kj: "Navrose";
// kj = "whatever" -- error

let PI_small : 3.14 | 3.15;
// PI_small= 3.15;------ no error
