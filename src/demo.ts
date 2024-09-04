// class Contact {
//     id;
//     name;
//     birthdate;
// }
// target - esnext - This setting tells the TypeScript compiler to target the latest version of ECMAScript
// noEmit - true - Determines whether the compiler should produce output files.
// When noEmit is set to true, the TypeScript compiler will not generate any JavaScript output files.It will only perform type checking and validation, which is useful if you want to check for type errors without actually compiling the TypeScript code to JavaScript.This can be helpful in build processes where other tools handle the actual emission of code.

// adding type checking to js files
// learn how to check existing js files as js files are subset of ts files
// need to add 2 addition settings to config.json - allowJs:true,checkJs:true

// need to tell ts about libraries that are being used.
// we can use JSdoc keywords to further tell ts about our js code
// eg.
// we something other than number is passed in the function with parameter contactId ts will tell us about it
/**
 * @params {number} contactId
 * @returns
 */

// github.com/DefinitelyTyped/DefinitelyTyped
// most js lib has ts support especially for npm installs
// for custom you need to create type definitions on your own
// or for open srouce libs use that repo above. or better the webstie npmjs.com - @types eg.search @types jquery - copy the command and run