// vòng lặp loop

//1. for lặp với điều kiện đúng
for (var i = 0; i < 5; ++i) {
  console.log(i);
}

var myArray = ["Javascript", "Java", "Kotlin", "NodeJs", "ReactJs"];

var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; ++i) {
  console.log(myArray[i]);
}
//2. for/in - Lặp qua key của đối tượng
var myObject = {
  names: "Duy Hung",
  age: "21",
  address: "TPHCM",
};
for (var key in myObject) {
  console.log(key);
  console.log(myObject[key]);
}
var myString = "JavaScript";
for (var key in myString) {
  console.log(myString[key]);
}

//3. for/of - Lặp qua value của đối tượng
for (var value of Object.keys(myObject)) {
  console.log(myObject[value]);
}
//4. while lặp khi điều kiện đúng
var i = 0;
while (i < 5) {
  i++;
  console.log(i);
}
//5. do/while - Lặp ít nhất 1 lần sau đó lặp khi điều kiện đúng
do {
  // thực thi đoạn mã với số lần lặp
  i++;
  console.log(i);
} while (
  // điều kiện
  i < 10
);
isSuccess = false;
do {
  i++;
  console.log("thanh cong " + i);
  if ((isSuccess = false)) {
    isSuccess = true;
  }
} while (!isSuccess && i < 3);
