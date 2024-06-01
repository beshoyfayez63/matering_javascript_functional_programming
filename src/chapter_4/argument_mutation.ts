
/** 
 * Impure function, because original array will be modified.
*/
const maxStrings = (a: string[]) => a.sort().pop();

let countries = ["Argentina", "Uruguay", "Brasil", "Paraguay"];
// console.log(maxStrings(countries)); // "Uruguay"
// console.log(countries);

/**
 * Pure function, because original array won't modified.
 */
const maxStrings2 = (a: string[]) => [...a].sort().pop();