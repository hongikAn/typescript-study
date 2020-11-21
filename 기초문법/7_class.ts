
// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const hulk = new Person('Banner', 33);

// TS
class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
