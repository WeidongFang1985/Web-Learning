const array = [];
for (let i = 1; i <= 100; i++) {
  array.push(i);
}
const newArray = array.filter((i) => i !== 15);
console.log(newArray);
