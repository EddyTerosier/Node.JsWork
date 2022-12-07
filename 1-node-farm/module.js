// console.log(arguments);
// console.log(require("module").wrapper);

// MODULE.EXPORTS
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// EXPORTS
// const calc2 = require("./test-module-2");
const { add,multiply,divide } = require("./test-module-2");
console.log(add(9, 9));
console.log(multiply(9,9));
console.log(divide(9,9));

// CACHING
require("./test-module-3")();