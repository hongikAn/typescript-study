function logText(text) {
  console.log(text);
  return text;
}
// 타입을 구분하지 않고 다 받을 수 있는 이유? 타입을 정의하지 않았으므로 암묵적으로 any로 되어있기 때문
logText(10); // 숫자 10
logText('hi'); // 문자열 'hi'
logText(true); // 진위값 true


function logText<T>(text: T):T {
  console.log(text);
  return text;
}
// 제네릭? => 함수를 호출할때 파라미터에 대한 타입을 지정하면서 넘긴다
logText<string>('hi');


function logText(text: string) {
  console.log(text);
  // 문자열에 사용하는 함수를 쓰고싶은 경우, text에 string타입을 정의해줘야 한다.
  text.split('').reverse().join('');
  return text;
}

// 이렇게 별도의 함수를 정의해도 되지만, 유지보수 관점에서 타입이 다르다는 이유로 중복되는 코드를 계속 생성하는건 좋지 않다.
function logNumber(num: number) {
  console.log(num);
  return num;
}

logText('a');
logText(10);  // error
const num = logNumber(10);
logText(true);

// 유니온과 인터섹션
// 함수 하나에서 여러가지 타입을 받을 수 있게 되는것이 유니온이라고 이전에 배웠다.
function logText(text: string | number) {
  console.log(text);
  // 유니온의 문제점 1. 공통적으로 접근할 수 있는 속성이나 api만 사용할 수 있게된다.
  // text.
  return text;
}

// 이렇게 유니온으로 정의하면 input에 대한 문제점은 해결이 된다 하지만..
logText('a');
logText(10);

// 유니온의 문제점 2. string을 파라미터로 넣었음에도 반환값 또한 string | number가 되어버린다.
const a = logText('a');
// string | number 이므로 string에 관한 함수를 사용할 수 없다.
a.split('');


// 제네릭 관점에서 타입을 정의해보자
// <T>: 함수에 나는 제네릭을 쓰겠다. 타입을 받아서 쓰겠다.
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// logText의 함수의 타입을 string으로 쓰겠다
const str = logText<string>('abc');
str.split('');

// login은 boolean 타입이 된다.
const login = logText<boolean>(true);

// 함수를 정의할때 타입을 비워놓은 상태에서 호출하는 시점에 타입을 정의하는것!