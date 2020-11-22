interface DropdonwItem<T> {
  value: T;
  selected: boolean;
}
// interface Email {
//   value: string;
//   selected: boolean;
// }
const emails: DropdonwItem<string>[]= [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];
// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }
// 이렇게 value 타입이 추가될때마다 계속 코드가 추가된다.
// 제네릭으로 인터페이스를 정의해서 해결하자
// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

const numberOfProducts: DropdonwItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 배열의 요소를 받아서 option이라는 태그와 그 안의 속성을 만든다
// 제네릭을 유니온으로 받아서 정의
// function createDropdownItem(item: DropdonwItem<string> | DropdonwItem<number>) {

// 한단계 더 나아가서 인터페이스를 유니온으로 하는것도 함수에서 제네릭을 받아서 개선할 수 있다.
function createDropdownItem<T>(item: DropdonwItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
});