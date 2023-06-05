// Promise: sử lý thao tác bất đồng bộ sinh ra thay cho callback hell(ES6)
// -Sync: Đồng bộ
// -Async: Bất đồng bộ
// setTimeout,setTimeInterval,fetch, xmlHttpRequest, Đọc file
// request animation frame
// -pain
// - Lý thuyết, cách hoạt động
// callback hell
// Pyramid of doom

// 1 new promise
// 2 Excutor
//---
// 1 pendding
// 2 Fulfilled
// 3 reject
var promise = new Promise(
  // Excutor
  // thành công/ thất bại
  function (resolve, reject) {
    // logic
    // thành công -> resolve()
    // thất bại -> reject()
    resolve([
      {
        id: 1,
        name: "JavaScript",
      },
    ]);
    reject("co loi");
  }
);
promise
  .then(function (course) {
    console.log(course);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("done");
  });
//
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000);
  });
}
sleep(1000)
  .then(function () {
    console.log("1");
    return sleep(2000);
  })
  .then(function () {
    console.log("2");
    return sleep(2000);
  })
  .then(function () {
    console.log("3");
    return sleep(2000);
  })
  .then(function () {
    console.log("4");
    return sleep(2000);
  })
  .then(function () {
    console.log("5");
    return sleep(2000);
  });

// promise.resolve
// promise.reject
// promise.all dùng khi 2 promise không phụ thuộc vào nhau
//var promise = Promise.resolve("Success");
var promise = Promise.reject("Error");
promise
  .then(function (result) {
    console.log("resolve", result);
  })
  .catch(function (err) {
    console.log("reject", err);
  });
// promise.all dùng khi 2 promise không phụ thuộc vào nhau
var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 1000);
});
var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 2000);
});
Promise.all([promise1, promise2]).then(function (result) {
  var result1 = result[0];
  var result2 = result[1];
  console.log(result2.concat(result1));
});
