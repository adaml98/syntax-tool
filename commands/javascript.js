const chalk = require("chalk");

module.exports = function js() {
  console.log(`${chalk.bgCyanBright(" JS ARRAY FUNCTIONS ")}`);
  console.log(`
Accessing Elements`);
  console.log(`
  ${chalk.greenBright(
    "a1.concat(a2)"
  )} - Return new array by joining arrays a1 and a2 together
  ${chalk.greenBright(
    "a1.join(separator)"
  )} - Join all elements of array a1 into a string separated by separator arg
  ${chalk.greenBright(
    "a1.slice(start, end)"
  )} - Extract a section from start to end of array a1 and return a new array
  ${chalk.greenBright(
    "a1.indexOf(obj)"
  )} - Return first index of obj within array a1
  ${chalk.greenBright(
    "a1.lastIndexOf(obj)"
  )} - Return last index of obj within array a1
`);
  console.log("Iterating");
  console.log(`
  ${chalk.greenBright(
    "a1.forEach(fn)"
  )} - Calls function fn for each element in the array a1
  ${chalk.greenBright(
    "a1.every(fn)"
  )} - Return true if every element in array a1 satisfies provided testing function fn
  ${chalk.greenBright(
    "a1.some(fn)"
  )} - Return true if at least one element in array a1 satisfies provided testing function fn
  ${chalk.greenBright(
    "a1.filter(fn)"
  )} - Create a new array with all elements of array a1 which pass the filtering function fn
  ${chalk.greenBright(
    "a1.map(fn)"
  )} - Create a new array with results of calling function fn on every element in array a1
  ${chalk.greenBright(
    "a1.reduce(fn)"
  )} - Apply a function fn against an accumulator and each value (from left to right) of the array as to reduce it to a single value
  ${chalk.greenBright(
    "a1.reduceRight(fn)"
  )} - Apply a function fn against an accumulator and each value (from right to left) of the array as to reduce it to a single value
`);
  console.log("Mutating");
  console.log(`
  ${chalk.greenBright(
    "a1.pop()"
  )} - Remove and return last element from array a1
  ${chalk.greenBright(
    "a1.push(obj)"
  )} - Add obj to end of array a1 and return new length
  ${chalk.greenBright(
    "a1.reverse()"
  )} - Reverse order of elements of array a1 in place
  ${chalk.greenBright("a1.sort()")} - Sort the elements of array a1 in place
  ${chalk.greenBright(
    "a1.splice(start, deleteCount, items)"
  )} - Change content of array a1 by removing existing elements and/or adding new elements
  ${chalk.greenBright(
    "a1.unshift(obj)"
  )} - Add obj to start of array a1 and return new length
`);
  console.log("General");
  console.log(`
  ${chalk.greenBright(
    "a1.toString()"
  )} - Return a string representing array a1 and its elements (same as a1. join(','))
  ${chalk.greenBright(
    "a1.toLocaleString()"
  )} - Return a localized string representing array a1 and its elements (similar to a1.join(','))
  ${chalk.greenBright("Array.isArray(var)")} - Return true if var is an array
  ${chalk.greenBright("a1.length ")} - Return length of array a1
  ${chalk.greenBright("a1[0]")} - Access first element of array a1
`);
};
