// object prototype
// object
function User(firstName, lastName, age) {
  // thuộc tính
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  // phương thức
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
// cách thêm thuộc tính và phương thức vào object
User.prototype.className = "CNTT";
User.prototype.getClassName = function () {
  return this.className;
};
var user = new User("Duy", "Hung", "21");

console.log(user.getClassName());
