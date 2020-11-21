// 타입스크립트에서의 인터페이스
// 객체의 스펙정의(속성과 속성의 타입)
// 함수의 파라미터
// 함수의 스펙(파라미터, 반환 타입 등)
// 배열과 객체를 접근하는 방식
// 클래스

interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
  // console.log(user.nam); // error, 오탈자에 대한 오류 체크가능
  // console.log(user.power) // error, 인터페이스에 정의되어 있지 않은 속성에 대한 체크가능

}
const capt = {
  name: '캡틴',
  age: 12
}
getUser(capt);

// 인터페이스를 인자로 받아 사용할 때 항상 인터페이스의 속성 개수와 인자로 받는 객체의 속성 개수를 일치시키지 않아도 된다.
// 즉 인터페이스에 정의된 속성, 타입의 조건만 만족한다면 객체의 속성 개수가 더 많아도 상관없다.
// 속성의 순서 또한 지키지 않아도 된다.
const captOne = {
  age: 13,
  name: '캡틴',
  power: 100
}
getUser(capt);

// 옵션 속성
// 인터페이스를 사용할 때 속성을 선택적으로 적용가능, 정의되어 있지 않은 속성에 대해 인지시켜줄 수 있음.
interface CraftBeer {
  name: string;
  hop?: number;  
}

// hop 속성이 없다
let myBeer = {
  name: 'Saporo'
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Saporo
}
brewBeer(myBeer);

// 읽기 전용 속성
interface Beer {
  readonly brand: string;
}

let beer: Beer = {
  brand: 'Belgian Monk'
};

// myBeer.brand = 'Korean Carpenter'; // error!

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}
let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}
var arr: StringArray = ['a','b','c'];
arr[0] = '10';
arr['3'] = '10';  // ? 

// 딕셔너리 패턴
interface StringRegexDictionary { 
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,

}
//obj['cssFile'] = 'a'; // error, string이 RegExp타입에 할당될 수 없음
Object.keys(obj).forEach(function(value) {});

// 클래스 타입
// 클래스의 타입 규칙을 정할 수 있다.
interface HongsBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class hongBeer implements HongsBeer {
  beerName: string = 'Baby Guinness';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var captain: Developer = {
  language: 'ts',
  age: 100,
  name: '캡틴'
}

// 참고: https://joshua1988.github.io/ts/