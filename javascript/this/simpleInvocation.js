function printThis() {
  console.log(this);
}

printThis();

// 取决于在什么环境下运行，
// 如果是在浏览器里运行，就是window
// 如果在Node里运行，就是global context
