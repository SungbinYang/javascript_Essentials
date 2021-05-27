import getType from './getType';

console.log(typeof 'Hello World!'); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // 의도하지 않는 비어 있는 값 undefined
console.log(typeof null); // 의도해서 비어놓은 값 object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(getType(123)); // Number
console.log(getType(false)); // Boolean
console.log(getType(null)); // Null
console.log(getType({})); // Object
console.log(getType([])); // Array