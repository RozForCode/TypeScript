// to make a property in a interface accept multiple type we can use the pipe syntax

interface union {
    birthdate?: Date | number | string;
}

function getBirthdate(union: union) {
    if (typeof union.birthdate === "number") {
        return new Date(union.birthdate)
    }
    else if (typeof union.birthdate === "string") {
        return Date.parse(union.birthdate)
    }
    else return union.birthdate;
}

/**
 * type birthDate = Date | number | string;
 * interface union {
 *  birthDate:birthDate;
 * }
 */
//
// to combine interfaces we can use the extend keyword but there's another way
// extends can have multiple interfaces
// or when there's a situation when not defined any additional fields

// type AddressContact = Contact & Address // name of interfaces

// using type aliasing we can remove enums from our code

