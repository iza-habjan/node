# Node JS

**myscript.js**

const message = "hi there";

module.exports = message;

**index.js**

const message = require("./myscript.js");

console.log(message);

#### in terminal: node index.js

**index.js**

const message = require("./myscript.js");
console.log(message);

**contents of index.js gets transformed behind the scenes in Node to a function:**

function (exports, require, module, **filename, **dirname) {
const message = require("./myscript.js");
console.log(message);
};

**exports**    
Equivalent to "module.exports". We can technically export code using this, but it is easier to use "module.exports" because of a little corner case.

**require**       
Function to get access to the exports from another file

**module**     
Object that defines some properties + information about the current file (in this case index.js)
Example:
**_index.js:_**
console.log(\_\_dirname);

**_node:_**
iza@Macaroni node % node index.js
Module {
id: '.',
path: '/Users/iza/IzaCodes/Udemy-JavaScript/node',
exports: {},
parent: null,
filename: '/Users/iza/IzaCodes/Udemy-JavaScript/node/index.js',
loaded: false,
children: [],
paths: [
'/Users/iza/IzaCodes/Udemy-JavaScript/node/node_modules',
'/Users/iza/IzaCodes/Udemy-JavaScript/node_modules',
'/Users/iza/IzaCodes/node_modules',
'/Users/iza/node_modules',
'/Users/node_modules',
'/node_modules'
]
}

**\_\_filename**     
Full path + file name of this file (two underscores)

**\_\_dirname**      
Full path of this file / directory this file is in (two underscores)
Example:
**_index.js:_**
console.log(\_\_dirname);

**_node:_**
iza@Macaroni node % node index.js
/Users/iza/IzaCodes/Udemy-JavaScript/node

#### Require Cache Object

key: myscript.js
value: "hi there"

**so that the myscript.js file doesn't have to be executed again:**
index.js:
const message = require("./myscript.js); **_file gets called_**
console.log(message);
require(./myscript.js); **_data is stored in Cache, file doesn't have to be called again_**
**Every file gets executed one single time**

Example:
require("./myscript.js");
console.log(require.cache);

**_iza@Macaroni node % node index.js_**
[Object: null prototype] {
'/Users/iza/IzaCodes/Udemy-JavaScript/node/index.js': Module {
id: '.',
path: '/Users/iza/IzaCodes/Udemy-JavaScript/node',
exports: {},
parent: null,
filename: '/Users/iza/IzaCodes/Udemy-JavaScript/node/index.js',
loaded: false,
children: [ [Module] ],
paths: [
'/Users/iza/IzaCodes/Udemy-JavaScript/node/node_modules',
'/Users/iza/IzaCodes/Udemy-JavaScript/node_modules',
'/Users/iza/IzaCodes/node_modules',
'/Users/iza/node_modules',
'/Users/node_modules',
'/node_modules'
]
},
'/Users/iza/IzaCodes/Udemy-JavaScript/node/myscript.js': **Module** {
id: '/Users/iza/IzaCodes/Udemy-JavaScript/node/myscript.js',
path: '/Users/iza/IzaCodes/Udemy-JavaScript/node',
**exports: 'hi there'**,
parent: Module {
id: '.',
path: '/Users/iza/IzaCodes/Udemy-JavaScript/node',
exports: {},
parent: null,
filename: '/Users/iza/IzaCodes/Udemy-JavaScript/node/index.js',
loaded: false,
children: [Array],
paths: [Array]
},
filename: '/Users/iza/IzaCodes/Udemy-JavaScript/node/myscript.js',
loaded: true,
children: [],
paths: [
'/Users/iza/IzaCodes/Udemy-JavaScript/node/node_modules',
'/Users/iza/IzaCodes/Udemy-JavaScript/node_modules',
'/Users/iza/IzaCodes/node_modules',
'/Users/iza/node_modules',
'/Users/node_modules',
'/node_modules'
]
}
}

## Debugging Node JS

3 ways of debugging in Node:

node **inspect** nameOfFile.js
Start up a debugger **CLI** and pause execution whenever a "debugger" statement is hit
node **--inspect** nameOfFile.js
Start up a debugger instance and pause execution whenever a "debugger" statement is hit. Access the debugger at **_"chrome://inspect"_**
node **--inspect-brk** nameOfFile.js
Start up a debugger instance and **_wait to execute_** until a debugger is connected. Acces the debugger at **_"chrome://inspect"_**

#### CLI Debugger Commands

**c** Continue execution until program ends or next debugger statement
**n** Run the next line of code
**s** Step in to a function
**o** Step out of the current function
**repl** Starts an execution environment where different variables can be referenced inside of the program
