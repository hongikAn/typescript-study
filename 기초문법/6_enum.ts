// 타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원

// 숫자형 이넘
// 초기값을 주면 초기값부터 차례로 1씩 증가
// 초기값이 없다면 0부터 차례로 1씩 증가
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// 문자형 이넘은 이넘 값 전부 다 특정 문자 또는 다른 이넘 값으로 초기화 해줘야 한다.
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer) {
  if (answer == Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer == Answer.No) {
    console.log('오답입니다');
  }
}
askQuestion(Answer.Yes);
// askQuestion('Yes');
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');


// 참고: https://joshua1988.github.io/ts/guide