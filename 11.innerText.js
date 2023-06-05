// cách lấy ra
var headingElement = document.querySelector(".headings");
console.log(headingElement.innerText);
console.log(headingElement.textContent);
// cách sửa đổi
headingElement.innerText = "sua doi dom innerText";
//headingElement.textContent = "sua doi dom textContent";
// innerText lấy cả nội dung của thẻ con, trả lại những gì mà mình nhìn thấy

// textContent lấy cả khoảng cách (textNode ) giữa các thẻ con
