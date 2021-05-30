// 타입을 구분해주는 함수
export default function(data) { // default라는 키워드를 쓰면 함수의 이름을 안 밝혀두 된다. 함수의 이름을 이용할때는 default를 생략한다. // 하나만 작성 가능
    return Object.prototype.toString.call(data).slice(8, -1);
}