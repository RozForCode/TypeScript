// record syntax (generic)
let m: Record<string, string | number | Function> = { name: "bing sing" };
m.number = 1234
m.method = () => console.log("sing bign")

// Resource management with the using keyword in ts
/**
 * it is used to manage lifetime of a resource, like c#
 * it is used IN CONJUNCTION with objects that implement the disposable interface
 * dispose method
 * whenever a object goes out of scope (end of block or function) ts will call the dispose method
 */
interface Disposable {
    dispose(): void;
}
class Resource implements Disposable {
    constructor(private name: string) {
        console.log(`${this.name} acquired`)
    }
    dispose() {
        console.log(`${this.name} disposed`)
    }
}

function example() {
    using temp = new Resource("Temp Resource");
    console.log("working with the resource")
}//dispose is autmatically called here
example();