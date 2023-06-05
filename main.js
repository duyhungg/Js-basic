const arr1 = [2, 3, 4, 5, 6];
const arr2 = [3, 4];

const result = arr1.filter((data) => arr2.includes(data));

console.log(result);

console.log(arr1.filter((data) => arr2.includes(data)));
