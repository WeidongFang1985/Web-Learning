// const myObject = {
//   property: 'I belong to myObject',
//   getProperty: function () {
//     return this.property;
//   },
// };

const copyOfFunction = function () {
  return this;
};
console.log(copyOfFunction());
