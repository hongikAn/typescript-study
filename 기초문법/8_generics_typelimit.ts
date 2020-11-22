
// 제네릭의 타입 제한
// 제네릭에 타입 힌트를 조금 더 줄수 있다가 포인트!  
// function logTextLength<T>(text: T[]): T[] {
//   // 타입스크립트 입장에서는 어떤 타입이 들어올지 알수가 없다. length가 있다는건 개발자만 알고있다.
//   // 그러므로 []가 없을때는 length를 사용하면 오류가남
//   // console.log(text.length); // error
//   // 이때 T에 []배열타입을 넘기게되면 T가 배열이므로 length가 제공이 된다. 이런식으로 조금 더 힌트를 줄수도 있다.
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
// LengthType에서 제공되는 속성은 있는 상태에서 추가로 무언가 정의할 수 있다 라고 정의하는것.
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// length가 없으므로 에러
// logTextLength(10); // error

// 이렇게 length만 포함되어 있으면 된다.
logTextLength( { length: 10, abc: 20})


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 제네릭에 위의 ShoppingItem인터페이스에 선언된 속성들만 or 속성중 일부만 받고싶으면?
// ShoppingItem key들 중에 한가지가 제네릭 타입이 된다. 라는뜻
// 파라미터로는 name, price, stock중 하나만 들어올 수 있다
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);  // error
// getShoppingItemOption<string>('a'); // error

getShoppingItemOption('name');