function myFunction(param) {
  if (typeof param === "function") {
    param(1);
  }
}
function myCallback(value) {
  console.log("value ", value);
}
myFunction(myCallback);
//myfunction(123)
Array.prototype.map2 = function (callback) {
  var output = [];
  for (var i = 0; i < this.length; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};
var myArray = ["Javascript", "Java", "NodeJs"];
var html = myArray.map2(function (course) {
  return `<h2>${course}</h2>`;
});
console.log(html.join(" "));
