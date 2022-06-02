const counterObject = require("./myscript.js");

console.log(counterObject.getCounter()); // 0
counterObject.incrementCounter();
console.log(counterObject.getCounter()); // 1

const newCounterObject = require("./myscript.js"); // not executed for the second time
console.log(newCounterObject.getCounter()); // 1 (value that is currently in the require cache object)
