function clone4<T>(source: T, func: (source: T) => T): T {
    return Object.apply({}, source);
}
function clone5<T, T1 extends T>(source: T, func: (source: T1) => T1): T {
    return Object.apply({}, source);
}//second parameter type should match first parameter type
// if T2 is a similar interface then it is also valid

// generics can be applied to interfaces and classes too.