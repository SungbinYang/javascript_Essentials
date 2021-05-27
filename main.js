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

// 산술 연산자(arithmetic operator)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

// 할당 연산자(assignment operator)

let a = 2; // const는 재할당 불가
// a = a + 1;
a += 1;

console.log(a);

// 비교 연산자(comparison operaotr)

const a1 = 1;
const b1 = 3;

console.log(a1 === b1);

// 비교 함수
function isEqual(x, y) {
    return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));

const a2 = 13;
const b2 = 13;

console.log(a2 !== b2);
console.log(a2 < b2);
console.log(a2 > b2);
console.log(a2 >= b2);
console.log(a2 <= b2);

// 논리 연산자(logical operator)

const a3 = 1 === 123;
const b3 = 'AB' === 'ABC';
const c = false;

console.log(a3);
console.log(b3);
console.log(c);

console.log('&&: ', a3 && c);
console.log('||: ', a3 || b3 || c);
console.log('!: ', !a3);