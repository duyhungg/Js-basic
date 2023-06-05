// input
var inputValue;
var inputElement = document.querySelector('input[type="text"]');

inputElement.oninput = function (e) {
  inputValue = e.target.value;
};
// chechk box
var checkBox = document.querySelector("input[type='checkbox']");
checkBox.onchange = function (e) {
  console.log(e.target.checked);
};
// select box
var select = document.querySelector("select");
select.onchange = function (e) {
  console.log(e.target.value);
};
// keyup / keydown
var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeydown = function (e) {
  console.log(e.target.value);
};
inputElement.onkeyup = function (e) {
  console.log(e.which);
};
document.onkeydown = function (e) {
  switch (e.which) {
    case 27:
      console.log("exit");
      break;
  }
};
// preventDefault
var aElement = document.links;
for (var i = 0; i < aElement.length; i++) {
  aElement[i].onclick = function (e) {
    if (!e.target.href.startswith("https://www.facebook.com/")) {
      e.preventDefault();
    }
  };
}
// stopPropagation
document.querySelector("div").onclick = function () {
  console.log("div");
};
document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("click me");
};
