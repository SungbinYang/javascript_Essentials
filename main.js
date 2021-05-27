import getType from './getType';
import random from './getRandom';

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

// 삼항 연산자(ternary operator)

const a4 = 1 < 2;

if (a4) {
    console.log('참');
} else {
    console.log('거짓');
}

console.log(a ? '참' : '거짓');

// 조건문 (If statement)
// 조건문 (Switch statement)

console.log(random());

const a5 = random();

switch (a5) {
    case 0:
        console.log('a is 0');
        break;
    case 2:
        console.log('a is 2');
        break;
    case 4:
        console.log('a is 4');
        break;
    default:
        console.log('rest...');
}

if (a5 === 0) {
    console.log('a is 0');
} else if (a5 === 2) {
    console.log('a is 2');
} else if (a5 === 4) {
    console.log('a is 4');
} else {
    console.log('rest...');
}

// 반복문(For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul');

console.log(ulEl);

for (let i = 0; i < 10; i += 1) {
    const li = document.createElement('li');
    li.textContent = `list-${i+1}`;
    if ((i + 1) % 2 === 0) {
        li.addEventListener('click', function() {
            console.log(li.textContent);
        });
    }
    ulEl.appendChild(li);
}

// 변수 유효범위(Variable Scope)
// var, let, const

function scope() {
    if (true) {
        var a6 = 123;
    }
    console.log(a6);
}

scope();

// 형 변환(Type Conversion)

const a7 = 1;
const b4 = '1';

console.log(a7 === b4);

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14'...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if (NaN) {
    console.log(123);
}