// các method làm việc với mảng
var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 0,
  },
  {
    id: 2,
    name: "Java",
    coin: 0,
  },
  {
    id: 3,
    name: "NodeJS",
    coin: 3,
  },
  {
    id: 4,
    name: "ReactJS",
    coin: 0,
  },
  {
    id: 4,
    name: "Kotlin",
    coin: 7,
  },
];
// 1. forEach() sử dụng để duyệt qua từng phần tử của mảng
courses.forEach(function (course, index) {
  console.log(index, course);
});

// 2. every() kiểm tra tất cả các phần tử phải thỏa mãn 1 điều kiện nào đó nếu có 1 cái sai thì trả về false
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});
console.log(isFree);
// 3. some() ngược lại với every 1 phẩn tử thỏa mãn thì trả về true
var isFrees = courses.some(function (course, index) {
  return course.coin === 0;
});
console.log(isFrees);
// 4. find() dùng để tìm kiếm trả về 1 phần tử
var nameCourse = courses.find(function (course, index) {
  return course.name === "Java";
});
console.log(nameCourse);
// 5. filter() trả về tất cả các phần tử thỏa mãn điều kiện
var nameId = courses.filter(function (course, index) {
  return course.id === 4;
});
console.log(nameId);
// 6. map() dùng để thay đổi element của 1 array
// trong thực tế thì dùng map để render ra view ở trên website
function cousreHandler(course, index, originArray) {
  return {
    id: course.id,
    name: `khoa hoc ${course.name}`,
    coin: course.coin,
    coinText: `gia tien ${course.coin}`,
    index: index,
    originArray: originArray,
  };
}
var newCourses = courses.map(cousreHandler);
console.log(newCourses);
// console.log(newCourses.join(", "));
// 7. reduce() nhận 1 giá trị duy nhất sau khi tính toán trên array

function coinHandler(accumulator, currentValue, currentIndex, ariginArray) {
  return (accumulator += currentValue.coin);
}

var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);

var html = courses.map(function (course) {
  rerturn`<div>${course.title}</div>`;
});
