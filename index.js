const isboolean = require('lodash.isboolean');
const map = require('lodash.map');

const sayHi = require('scoped/dep1');
const sayHello = require('scoped/dep2');

const sayHello2 = require('./deps/dep1'); // will not refence 

console.info(sayHi());
console.info(sayHello());
console.info(sayHello === sayHello2);

const data = map(['A', 'B', true, false], function (item) {
    return isboolean(item) ? String(item) : item
});
console.info(data);
