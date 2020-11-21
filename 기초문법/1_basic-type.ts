// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS Boolean
let isLoggedIn: boolean = false;

// TS 배열
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1,2,3];

// TS Any
// 모든 타입에 대해서 허용
let age: any = '30';

// TS 튜플
// 튜플은 길이가 고정되고, 각 요소의 타입이 지정되어 있는 배열 형식이다.
let address: [string,number] = ['gangnam', 100];

// TS 객체
let obj: object = {};

let person: { name: string, age: number} = {
  name: 'thor',
  age: 1000
}

// TS Never
// 함수의 끝에 절대 도달하지 않는다는 의미
function neverEnd(): never {
  while(true) {
    
  }
}

// TS Void
// void 타입으로 선언시 변수에는 undefined, null만 할당가능, 함수에서는 반환값을 설정할 수 없다.
// let unuseful: void = 1; // error
let unuseful: void = undefined;
let unusefulValue: void = null;
function notuse(): void {
  console.log('hello');
  // return 1; // error
}

// 참고: https://joshua1988.github.io/ts/


