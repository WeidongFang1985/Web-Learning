const myObject = {
  myMethod(items) {
    console.log(this);
    const callback = () => {
      console.log(this);
    };
    items.forEach(callback);
  },
};
myObject.myMethod([1, 2, 3]);
