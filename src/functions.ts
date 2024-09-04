interface Contact {
    id: number;
    name1?: string;
}

function clone(source: Contact) {
    return Object.apply({}, source);
}//return type any
function clone2(source: Contact): Contact {
    return Object.apply({}, source);
}//return type defined

//function as a param with ts
function clone3(source: Contact, func: (source: Contact) => Contact): Contact {
    return Object.apply({}, source);
}//return type defined
//  func: (source: Contact) => Contact defines that function should have a param of type Contact and should return value of type Contact

// defining a method in a interface 
interface exp {
    id: string;
    name: string;
    GoodBye(name: string): Contact;//returns type contact
}