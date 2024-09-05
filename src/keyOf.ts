// its like instance of operator
type ContactFields = keyof Contact;
// a varible of this type may only contain values matching the name of properties of Contact Interface

let field: ContactFields = "birthDate";

function getValue(source, propertyName: keyof Contact) {
    return source[propertyName];
}//helps avoid errors
function getValue1<T>(source: T, propertyName: keyof T) {
    return source[propertyName];
}//helps avoid errors