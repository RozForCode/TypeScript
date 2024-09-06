// its like instance of operator
type ContactFields = keyof Contact;
// a varible of this type may only contain values matching the name of properties of Contact Interface

let field: ContactFields = "birthDate";

function getValue(source, propertyName: keyof Contact) {
    return source[propertyName];
}//helps avoid errors
function getValue1<T>(source: T, propertyName: keyof T) {//eg. T is Contact or any other interface
    return source[propertyName];
}//helps avoid errors

// another way
function getValue2<T, U extends keyof T>(source: T, propertyName: U) {//eg. T is Contact or any other interface
    return source[propertyName];
}//helps avoid errors



// typeof 
function toContact(nameOrContact: string | Contact): Contact {
    if (typeof nameOrContact === "object") {
        return {
            id: nameOrContact.id,
            name: nameOrContact.name,
            status: nameOrContact.status
        }
    }
    return {
        id: 0,
        name: nameOrContact,
        status: ContactStatus.Active
    }
}

const mytype = { min: 1, madx: 100 };

function save(source: typeof mytype) {
    return source;
}