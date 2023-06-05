// include có trong array và string
// trong string thì kiểm tra chữ
var title = "toi la Duy Hung ";
var isFind = title.includes("la", 6);
console.log(isFind);
// trong mảng thì cũng tương tự như string
var course = ["Javascript", "Java", "NodeJS"];
var isFinds = course.includes("Java", 2);
console.log(isFinds);
