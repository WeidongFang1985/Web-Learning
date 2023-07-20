function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person('leo', 12);
console.log(person.name, person.age);
