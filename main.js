import getType from './getType'; // getType.js
import { random, users as sungbins } from './getRandom'; // getRandom.js
import * as R from './getRandom';
import _ from 'lodash'; // Fron node_modules

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

// 함수 복습
// 함수 사용시, 최대한 호출되는 횟수를 줄여라!
// 반복적으로 사용시, 변수에 담아서 사용!

function sum() { // 함수 선언방식
    console.log(arguments);
    return arguments[0] + arguments[1];
}

const sub = function(x, y) { // 익명함수, 함수 표현
    return x - y;
}

const a8 = sum(7, 3);
console.log(a8);

const b5 = sum(4, 12);
console.log(b5);
console.log(sum(a8, b5));
console.log(sub(1, 4));

// 화살표 함수
// () => {} vs function() {}

const double = function(x) {
    return x * 2;
}

console.log('double: ', double(7));

const doubleArrow = x => ({
    name: 'sungbin' + x
});

console.log('doubleArrow: ', doubleArrow(7));

// 즉시 실행함수
// IIFE, Immediately-Invoked Function Expression

const a9 = 7;

function doubles() {
    console.log(a9 * 2);
}

doubles();

(function() { // IIFE
    console.log(a9 * 2);
})();

(function() { // IIFE, 권장사항
    console.log(a9 * 2);
}());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a10 = 7;

doubleFnc(); // 호이스팅 :: 함수 선언은 아래에 작성했지만 호이스팅이 발생되어서 호출이 가능하다!

function doubleFnc() {
    console.log(a10 * 2);
}

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
    console.log('Sungbin!');
}, 3000);

const interval = setInterval(() => {
    console.log('Sungbin!!!');
}, 5000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
    clearTimeout(timer);
    clearInterval(interval);
});

// 콜백(Callback)
// 함수의 인수로 사용되는 함수
// 어떠한 실행문을 보장하기 위해 사용을 많이한다.

// setTimeout(함수, 시간)

function timeout(callback) {
    setTimeout(() => {
        console.log('Test');
        callback();
    }, 3000);
}

timeout(() => {
    console.log('Done!');
});

function User(first, last) { // 생성자 함수
    this.firstName = first;
    this.lastName = last;
};

// 프로토 타입
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const sungbin = new User('Sungbin', 'Yang'); // new 연산자를 통해 생성자 함수 User를 통하여 객체 데이터 생성
const amy = new User("Amy", "Clarke"); // new 연산자를 통해 생성자 함수 User를 통하여 객체 데이터 생성
const neo = new User("Neo", 'Smith'); // new 연산자를 통해 생성자 함수 User를 통하여 객체 데이터 생성

// new라는 키워드를 통해서 생성자 함수로 실행한 결과를 반환을 할당한 변수를 인스턴스라고 한다. 
// 프로토 타입 메소드를 참조하는 형식이다.
console.log(sungbin.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());

// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

const jacob = {
    name: 'Jacob',
    normal: function() {
        console.log(this.name); // 여기서 this는 호출된 함수의 앞의 부분
    },
    arrow: () => {
        // console.log(this.name); // undefinded
    }
}

jacob.normal();
jacob.arrow();

const sam = {
    name: 'Sam',
    normal: jacob.normal,
    arrow: jacob.arrow
}

sam.normal();
sam.arrow();

function Users(name) { // 생성자 함수8
    this.name = name;
}

Users.prototype.normal = function() {
    console.log(this.name);
}

Users.prototype.arrow = () => {
    console.log(this.name);
}

const bini = new Users('Bini');

bini.normal();
// bini.arrow(); // undefined

const clock = {
    name: 'digital',
    timeout: function() {
        // setTimeout(함수, 시간)
        setTimeout(() => {
            console.log(this.name);
        }, 2000)
    }
}

clock.timeout();

// ES6 Classes

const tom = {
    name: 'Tom',
    normal() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name)
    }
}

tom.normal();
// tom.arrow();

// function Player(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// Player.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// ES6 Class 문법
class Player {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const bob = new Player('Bob', 'Yarn');
const lion = new Player('Lion', 'Kakao');
const pinch = new Player('Pinch', 'kakao');

console.log(bob);
console.log(lion.getFullName());
console.log(pinch.getFullName());

// 상속
class Vehicle {
    constructor(name, wheel) {
        this.name = name;
        this.wheel = wheel;
    }
}

const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel);
    }
}

const myBicycle = new Bicycle('삼천리', 2);
const daughterBicycle = new Bicycle('세발자전거', 3);
console.log(myBicycle);
console.log(daughterBicycle);

class Car extends Vehicle {
    constructor(name, wheel, licence) {
        super(name, wheel);
        this.licence = licence;
    }
}

const myCar = new Car('벤츠', 4, true);
const daughtersCar = new Car('포르쉐', 4, false);
console.log(myCar);
console.log(daughtersCar);

// JS 데이터

// String: "", '', `` // 리터럴 방식(데이테럴 손쉽게 만드는 방식) or new String()
// String.prototype.indexOf()
const result1 = 'Hello world'.indexOf('sungbin');
console.log(result1);

const str1 = '0123';
console.log(str1.length);

const str2 = 'Hello World!';
console.log(str2.indexOf('sungbin') !== -1);

// slice는 문자열을 자르는 메소드로 1번째 인수는 시작 2번째 인수는 마자막 인수 전까지 출력을 한다.
// 두번째 인수는 옵션이다. 없으면 끝까지
// String.prototype.slice() : 문자열의 일부를 추출하면서 새로운 문자열을 반환
console.log(str2.slice(6, 11));

// replace는 첫번째 인수의 문자를 2번째 인수의 문자로 바꿔주는 기능을 한다.
console.log(str2.replace(' World!', ''));

// match : 정규식을 이용하여 특정한 문자데이터를 추출하는데 반환이 배열이다. 배열의 첫번재가 원하는 결과가 있다.
// 정규표현식(RegExp 이용)
const str3 = 'ysb05222@gmail.com';
console.log(str3.match(/.+(?=@)/)[0]);

// trim: 앞 뒤 공백 제거
const str4 = '      Hello World!        ';
console.log(str4.trim());


// Number
const pi = 3.14159265358979;
console.log(pi);

// toFixed() : 소수 몇째짜리까지 고정(유지)시키기 반환값은 string
const str5 = pi.toFixed(2);
console.log(str5);
console.log(typeof str5);

// parseInt : 강제로 정수형으로 변환 (전역 함수)
// parseFloat : 강제로 실수로 변환 (전역 함수)
const integer = parseInt(str5);
const float = parseFloat(str5);
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

// Math 내장 객체 : 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체 -> Number 자료형만 지원가능하며 BigInt와 사용 불가
// 절대값
console.log('abs: ', Math.abs(-12));

// 인수로 들어온 값중에 가장 작은 값 출력
console.log('min: ', Math.min(2, 8));

// 인수로 들어온 값중에 가장 큰 값 출력
console.log('max: ', Math.max(2, 8));

//정수 단위 올림 즉, 소수 첫째자리에서 올림
console.log('ceil: ', Math.ceil(3.14));

// 정수 단위 내림 즉, 소수 첫째자리에서 내림
console.log('floor: ', Math.floor(3.14));

// 정수단위 반올림 즉, 소수 첫째자리에서 반올림
console.log('round: ', Math.round(3.14));

// 0.xxxxx : xxx부분이 랜덤하게 나온 숫자가 나옴(난수)
console.log('random: ', Math.random());

// Boolean: true, false
// undefined
// null
// Array: [] : 배열 데이터의 특정한 위치를 가르키는 것을 인덱스라고 한다.
// 각각의 배열 데이터 1개 1개를 요소라고 한다.(element or item)
// length
const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(numbers[1]); // 인덱싱
console.log(fruits[2]); // 인덱싱

console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);

console.log([].length); // 0

// concat() : 2개의 배열데이터를 병합해서 새로운 배열을 만든다.
// 원본의 데이터는 손상되지 않는다.
console.log(numbers.concat(fruits));
console.log(numbers);
console.log(fruits);

// forEach() : 일종의 for문 :: 반환값이 없다.
fruits.forEach(function(item, index) {
    console.log(item, index);
});

// map() : 일종의 forEach와 비슷하다. 반환형태가 배열이다. 새로운 배열을 만들어준다. 원본 훼손 x
const x = fruits.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`);
});
console.log(x); // undefined

const y = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
}));
console.log(y); // 배열형태로 반환

// filter() :: 조건에 해당되는 element들만 새로운 배열 형태로 반환한다. 원본 훼손 x
const q = numbers.map(number => number < 3);
console.log(q);

const w = numbers.filter(number => number < 3);
console.log(w);

console.log(numbers);

// find(), findIndex() 
// find는 특정한 원소를 찾으면 찾음을 중단하고 찾은 element를 반환한다.
const e = fruits.find(fruit => /^C/.test(fruit));
console.log(e);

const r = fruits.findIndex(fruit => /^C/.test(fruit));
console.log(r);

// includes() : 인수에 포함이 되어있는지 확인후 Boolean형으로 반환
const t = numbers.includes(3);
console.log(t);

const u = fruits.includes('Sungbin');
console.log(u);

// push(), unshift()
// 원본 수정됨 주의!

numbers.push(5); // 가장 마지막에 인수를 넣어서 반환한다.
console.log(numbers);

numbers.unshift(0); // 가장 처음에 인수를 넣어서 반환한다.
console.log(numbers);

// reverse() : 원소를 역으로 ..
// 원본수정됨 주의!
numbers.reverse();
fruits.reverse();

console.log(numbers);
console.log(fruits);

// splice() :: 첫번 째 인수는 배열 데이터의 인덱스 값이고 두번째 인수는 인덱스번호에서 아이템을 1개만 지워라는 의미
// 원본 수정됨
numbers.splice(2, 1, 999); // 999데이터를 인데스 번호에 추가해라
console.log(numbers);

fruits.splice(2, 0, 'Orange');
console.log(fruits);

// Object: {}
// Object.assign() : 열거할수 있는 하나이상의 출처 객체로부터 대상객체로 속성을 복사할때 사용
const userAge = {
    // key: value
    name: 'Sungbin',
    age: 26
}

const userEmail = {
    name: 'Sungbin',
    email: 'ysb05222@gmail.com'
}

const target = Object.assign({}, userAge, userEmail); // 정적 메소드
console.log(target);
console.log(userAge);
console.log(target === userAge);

const o = { k: 123 };
const p = { k: 123 };
console.log(o === p);

// Object.keys() :: 갹체의 키값을 반환한다. 반환 값은 배열이다.
const person = {
    name: 'Sungbin',
    age: 26,
    email: 'ysb05222@gmail.com'
}

const keys = Object.keys(person);
console.log(keys);

console.log(person['email']);

const values = keys.map(key => person[key]);
console.log(values);

// 구조 분해 할당(Destructuring assignment) :: 객체데이터를 구조분해해서 내가 원하는 속성만 꺼내서 사용가능
// 비구조화 할당

const student = {
    name: 'Sungbin',
    age: 26,
    email: 'ysb05222@naver.com',
    address: 'USA'
}

// address가 undefined일 경우 이런식으로 값을 초기화해서 사용이 가능하다
// 하지만, 객체 속성에 이미 있으면 최기화해도 초기화된 값이 아니라 객체에 정의된 값이 들어간다.
// 특정한 객체에서 어느 특정한 데이터를 꺼내올때 그 데이터의 특정한 속성 이름을 적어주고 활용할때 :를 사용하여 이름을 재정의 해준다.
const { name: lini, age, address = 'Korea' } = student;
// E.g, student.address

console.log(`사용자의 이름은 ${lini}입니다.`);
console.log(`${lini}의 나이는 ${age}세입니다.`);
console.log(`${lini}의 이메일 주소는 ${student.email}입니다.`);
console.log(address); // Korea

// 배열데이터도 구조 분해 할당이 가능하다.
const [, , b0] = fruits; // 특정 배열원소를 출력하고 싶을때 원하는 원소까지 남기고 그 전에는 ,로 대신한다.
console.log(b0);

// 전개 연산자(Spread)
const toys = ['Apple', 'Banana', 'Cherry', 'Orange'];
console.log(toys);
console.log(...toys); // ...는 전개 연산자 기호이고, 배열데이터를 ,로 구분하는 item으로 나타나서 출력하게 된다. 출력결과는 아래와 같다.
// console.log('Apple', 'Banana', 'Cherry', 'Orange')

/// ...c : rest parameter (나머지 매개변수) :: Apple은 a Banana는 b 나머지는 c로 들어간다.
// 속성의 이름과 변수의 이름이 같으면 속성의 이름만 남겨놓는다. ex) a,b,c
const toObject = (a, b, ...c) => ({ a, b, c });
console.log(toObject(...toys));

// 데이터 불변성
let v1 = 1;
let v2 = 4;
console.log(v1, v2, v1 === v2);

v2 = v1;
console.log(v1, v2, v1 === v2);

v1 = 7;
console.log(v1, v2, v1 === v2);
let v3 = 1; // 기존의 1인 메모리 영역을 가르킨다. // 원시데이터는 새롭게 만들어지는것이 아니고 불변한다.
console.log(v2, v3, v2 === v3);

// 데이터 가변성
let n1 = { k: 1 };
let n2 = { k: 1 };
console.log(n1, n2, n1 === n2);

n1.k = 7;
n2 = n1; // 복사되는것이 아니고 포인터가 가르키는 주소만 바뀌는것이다. :: 복사를 하고 싶으면 복사개념을 사용해야한다.
console.log(n1, n2, n1 === n2);
n1.k = 2;
console.log(n1, n2, n1 === n2);
let n3 = n2;
console.log(n1, n2, n3, n1 === n3);
n1.k = 9;
console.log(n1, n2, n3, n1 === n3);

// 얕은 복사(shallow copy) :: Object.assign or 전개연산자 , 깊은 복사(Deep copy) :: lodash 사용
const thing = {
    name: 'Rovert',
    age: 26,
    emails: ['ysb05222@naver.com']
}

// const copyThing = Object.assign({}, thing); // 복사의 개념 :: 의도하지 않았다면 참조형 데이터들은 복사의 개념을 사용하는것이 좋다.
// const copyThing = {...thing }; // 전개 연산자를 통하여 복사하는 방식 (얕은 복사) :: 겉의 표면만 복사가 되고 안은 복사가 이루어지지 않았다.
const copyThing = _.cloneDeep(thing); // 깊은 복사 :: 안의 속성까지 복사해서 새로운 객체가 복사된다.
console.log(copyThing === thing);

thing.age = 22;
console.log('thing: ', thing);
console.log('copyThing: ', copyThing);

console.log('------');
console.log('------');

thing.emails.push('ysb05222@gmail.com'); // 이메일은 배열데이터를 따로 복사처리를 하지 않았다. 복사한것은 객체 데이터 1개이기 때문에 이메일은 같은 메모리주소를 공유
console.log(thing.emails === copyThing.emails);
console.log('thing: ', thing);
console.log('copyThing: ', copyThing);

// 가져오기, 내보내기
// 기본통로로 내보내면 불러올때 원하는 이름으로 불러올수 있고, 하나의 데이터만 내보낼수 있지만 이름이 있는 통로로 내보내면 {}안에 원하는 이름을 작성 및 여러개를 내보낼 수 있음.
console.log(_.camelCase('the hello world'));
console.log(getType([1, 2, 3]));
console.log(random(), random());
console.log(sungbins);
console.log(R);

// lodash

const usersA = [
    { userId: '1', name: 'Sungbin' },
    { userId: '2', name: 'Neo' }
];

const usersB = [
    { userId: '1', name: 'Sungbin' },
    { userId: '3', name: 'Amy' }
];

const usersC = usersA.concat(usersB);
console.log('concat: ', usersC);
console.log('uniqBy: ', _.uniqBy(usersC, 'userId')); // userId 중복값 제거

const usersD = _.unionBy(usersA, usersB, 'userId'); // 중복제거 후, 합친다.
console.log('unionBy', usersD);

const teachers = [
    { userId: '1', name: 'Sungbin' },
    { userId: '2', name: 'Neo' },
    { userId: '3', name: 'Amy' },
    { userId: '4', name: 'Evan' },
    { userId: '5', name: 'Lewis' }
];

const foundTeacher = _.find(teachers, { name: 'Amy' }); // 해당되는 객체데이터를 반환한다,
const foundTeacherIndex = _.findIndex(teachers, { name: 'Amy' }); // 해당되는 객체 데이터의 인덱스를 반환한다.
console.log(foundTeacher);
console.log(foundTeacherIndex);

_.remove(teachers, { name: 'Sungbin' });
console.log(teachers);