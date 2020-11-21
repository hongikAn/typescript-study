// 타입 별칭
// 타입 vs 인터페이스
// 가장 큰 차이는 확장의 가능 / 불가능이다. 인터페이스는 확장이 가능하다.
// 가능한한 type 보다는 interface로 선언해서 사용하자.

// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}

// 참고: https://joshua1988.github.io/ts/