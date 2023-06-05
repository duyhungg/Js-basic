var testElement = document.querySelector(".test");
// add
// contains
// remove
// toggle
console.log(testElement.classList.value);
testElement.classList.add("red");
// kiểm tra class dùng contents
console.log(testElement.classList.contains("red"));
// remove
testElement.classList.remove("red");
// toogle
setTimeout(() => {
  testElement.classList.toggle("red");
}, 1000);
