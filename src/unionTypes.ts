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