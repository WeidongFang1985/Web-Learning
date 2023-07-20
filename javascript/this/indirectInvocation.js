const aPerson = {
  name: 'Jing',
  age: 20,
  greeting: function () {
    console.log('My name is', this.name);
  },
};

const bPseron = {
  name: 'Ying',
  greeting: aPerson.greeting,
};

bPseron.greeting.call(aPerson);
bPseron.greeting();
bPseron.greeting = bPseron.greeting.bind(aPerson);
bPseron.greeting();

// call是赋值后直接调用函数，但是是一次性的
// bind只是赋值，无法调用，但赋值是永久的。
