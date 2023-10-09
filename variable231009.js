// 변수 (Variable)
// 메모리 공간의 이름, 변수를 통해서 저장한 값에 접근 가능함. 
// 변수 선언 키워드 -> var, let, const

// 기본구조 -> 선언 키워드 식별자(변수명) = 값

var name = 'KIM'; // 문자열 String은 작은따옴표 혹은 큰 따옴표로 감싸야된다. 
let score = 70; // 숫자열
let flag = true // boolean값 true, false
const number = [1, -2, 3.5, 10]; // 배열 array
const person = {name: 'LEE', age: 20, gender: 'man'} // 객체 object

// var, let, const
// 1. var : 요즘엔 사용하지 않는다.
// 2. let : 재할당 가능 -> 재할당을 통해서 저장된 값 바꾸기 가능
// let의 예를 좀 살펴보자. 

let age = 10;
console.log(age); // 10이 출력될거야.

age = 15;
console.log(age); // 15가 출력됨. let은 가변한다. 그래서 '변수' 라는 말에 최적화 되어 있음.

// 3. Const : 재할당 불가능 , '상수'를 저장할 때 사용. 변수가 아님에 유의 
const old = 10; // old 10선언
//old = 15; // 재할당불능
// console.log(age); // 10뜬다. 15안됨. 

// 이렇듯 let과 const의 차이를 잘 숙지하자. 


