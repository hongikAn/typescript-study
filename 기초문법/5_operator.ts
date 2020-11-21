// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// 유니온 타입(Union Type)이란 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입이다.
// # Union 타입 문법 - `any` 보다는 명시적임

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value == 'number') {
    value.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
  }
  if (typeof value == 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입이 A도 될수있고 B도 될수있다 라고 생각하면 함수 안에서 이 속성들을 모두 사용할 수 있을것 같지만 아니다!
// 함수를 호출하는 시점에 Person 타입이 올지 Developer 타입이 올지 알 수가 없기 때문에 어느 타입이 들어오든 간에 오류가 안 나는 방향으로 타입을 추론하게 됨.
function introduce(someone: Developer | Person) {
  someone.name;
  someone.skill;  // 타입 오류
  someone.age;    // 타입 오류
}

introduce({ name: '디벨로퍼', skill: '웹 개발'}); // 만약 `introduce` 함수 안에서 `someone.age` 속성을 접근하고 있으면 함수에서 오류 발생
introduce({ name: '캡틴', age: 100}); // 만약 `introduce` 함수 안에서 `someone.skill` 속성을 접근하고 있으면 함수에서 오류 발생

//결과적으로 introduce2() 함수 안에서는 별도의 타입 가드(Type Guard)를 이용하여 타입의 범위를 좁히지 않는 이상 
// 기본적으로는 Person과 Developer 두 타입에 공통적으로 들어있는 속성인 name만 접근할 수 있게 된다.

function introduce2(someone: Person | Developer) {
  console.log(someone.name); // O 정상 동작
}


function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });
// askSomeone({ name: '캡틴', age: 100});


// var seho: string | number | boolean;
// var capt: string & number & boolean;

// 참고: https://joshua1988.github.io/ts/