var testElement = document.querySelector(".test");
// innerHTML thêm dưới dạng là elementNode nếu có thẻ <h1></h1>
testElement.innerHTML = "<h1 title='attributes'>Heading</h1>";
//outerHTML lấy cả thẻ
// innerHTML sẽ ghi đè thẻ h1 vừa thêm vào còn outerHTML thì sẽ ghi đè thẻ div có class là test
