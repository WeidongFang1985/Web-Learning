function checkThis() {
  this.value = 'test';
  console.log(this);
}

checkThis();
