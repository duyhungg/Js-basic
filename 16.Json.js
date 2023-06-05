// 2 JSON là 1 định dạng dữ liệu
var a = '"abc"';
var json = '["JavaScript", "Java"]';
var objectJson = '{"name":"DuyHung"}';
console.log(JSON.parse(a));
console.log(JSON.stringify(json));
