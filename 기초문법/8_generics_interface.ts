 // 인터페이스 제네릭을 선언하는 방법
 
//  interface Dropdown {
//    value: string;
//    selected: boolean;
//  }

//  const obj: Dropdown = { value: 'abc', selected: false};

 interface Dropdown<T> {
   value: T;
   selected: boolean;
 }
 
 // value의 타입은 string이 된다.
 const obj: Dropdown<string> = { value: 'abc', selected: false };