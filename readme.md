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
