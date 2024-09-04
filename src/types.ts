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
// unlike most ts features that get stripped away at compile time  enum get compilled along with your code
// better auto completion and err messages
enum ContactStatus {
    Active = "Active",
    Inactive = "Inactive",
    New = "New"
}
interface Contact extends Address {
    id: number;
    name?: ContactName;
    birthDate: Date;
    status: ContactStatus;
}
interface Address {
    line1?: string;
    line2?: string;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 123,
    status: ContactStatus.Active,
    // name: "Jamie Johnsom", ? makes it optional
}


// type aliasing - giving different name to already existing types using the keyword type
type ContactName = string;//can be used interchangeably
