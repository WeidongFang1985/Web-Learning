const a = 10;

function test() {
  this.a = 20;
  console.log(this.a);
}

new test();
console.log(a);
