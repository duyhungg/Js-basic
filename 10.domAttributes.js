var headingElement = document.querySelector("h1");
// c1
headingElement.title = "heading";
console.log(headingElement);
//  c2 thêm phương thức
headingElement.setAttribute("class", "heading");
headingElement.getAttribute("class");
console.log(headingElement.getAttribute("class"));
