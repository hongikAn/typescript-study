interface Email {
  value: string;
  selected: boolean;
}
const emails: Email[]= [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];
interface ProductNumber {
  value: number;
  selected: boolean;
}
// 이렇게 value 타입이 추가될때마다 계속 코드가 추가된다.
// 제네릭으로 인터페이스를 정의해서 해결하자
interface TrueFalse {
  value: boolean;
  selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 배열의 요소를 받아서 option이라는 태그와 그 안의 속성을 만든다
// Email과 ProductNumber 둘다 수용할 수 있는 타입을 정의해줘야 한다.
// 하지만 value값의 타입이 추가될때마다 이렇게 유니온으로 하는건 코드양이 늘어나 비 효율적.
function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});