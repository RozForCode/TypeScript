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

