var array1 = ["JavaScript", "Java", "Kotlin"];
var array2 = ["ReactJS", "NodeJS"];
// var array3 = array1.concat(array2);
// console.log(array3);
// spread
// rải ... trước array hoặc object thì sẽ bỏ dấu ngoặc
var array3 = [...array1, ...array2];
console.log(array3);
var object1 = {
  name: "JavaScript",
};
var object2 = {
  price: 1000,
};

var object3 = {
  ...object1,
  ...object2,
};
console.log(object3);
//  truyền tham số cho hàm
function logger(a, b, c) {
  console.log(a, b, c);
}
logger(...array1);
