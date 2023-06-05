// dùng cho mảng và object
var array = ["Javascript", "Java", "Reactjs"];
//var [a, b, c] = array;
var [a, ...rest] = array;
console.log(a);
// rest lấy ra phần còn lại
console.log(a);
console.log(rest);

var course = {
  name: "javascript",
  price: 1000,
  children: {
    name: "kotlin",
  },
};

var {
  name: parentName,
  children: { name },
  decription = "default value",
} = course;
console.log(decription);
// tương tự với rest
function logger(...param) {
  console.log(param);
}
logger(1, 2, 3, 4, 5);
