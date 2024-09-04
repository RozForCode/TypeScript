let x: number;
let y: string;
let w: string[];

// w= "hello"; --what if you actually want to assign the variable to a different type
// use any
let i: any;
i = "hello";
i = 123;
// or cast 

let b: string[]
b = "hello" as any; // although should be avoided in ts


// creating custom types with interface
interface Contact extends Address {
    id: number;
    name?: string;
    birthDate: Date;
}
interface Address {
    line1?: string;
    line2?: string;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 123,
    // name: "Jamie Johnsom", ? makes it optional
}