const aPerson = {
  name: 'Jing',
  age: 20,
  greeting: function () {
    console.log('My name is', this.name);
  },
};

aPerson.greeting();

const bPseron = {
  name: 'Ying',
  greeting: aPerson.greeting,
};

bPseron.greeting();

// method invocation - this binds to whoever invokes
// 谁使用他，this就绑定给谁
