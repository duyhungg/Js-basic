console.log(document);
// document.write nhận vào 1 chuỗi và ghi vào dom
document.write("hello");
//HTML DOM
// 1 Element: ID class tag
// CSS selector, HTML collection
var headingNote = document.getElementById("heading");
console.log(headingNote);
var headingNote2 = document.getElementsByClassName("headings");
console.log(headingNote2);
var headingNote3 = document.getElementsByTagName("h1");
console.log(headingNote3);
// querySelector
var headingNote4 = document.querySelector(".box .box1");
console.log(headingNote4);
var headingNote5 = document.querySelectorAll(".box .box1");
console.log(headingNote5);
// anchor
