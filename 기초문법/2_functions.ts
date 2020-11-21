// 함수의 파라미터와 반환값에 타입을 정의
function sum(a: number, b: number): number {
  return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 인자
// 타입스크립트에서는 함수의 인자는 모두 필수 값
// 매개변수를 설정한다면 undefined, null이라도 넘겨야 한다.
// 즉 정의된 매개변수 값만 받을 수 있고 추가로 인자를 받을 수 없다.
function addName(firstName: string, lastName: string): string {
  return firstName + lastName;
}
addName('hong', 'an');
// addName('hong', 'an', 'kse'); // error, 파라미터가 더 많음
// addName('hong'); // error, 파라미터가 부족함

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  
}
log('hello world'); // b를 넘기지 않음
log('hello ts', 'abc'); // b를 파라미터로 넘김

// 참고: https://joshua1988.github.io/ts/