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


// Type Aliases