// filter
const number = [1, 5, 6, 21, 51, 65, 8, 9];
const num = number.filter(item => item >= 10)
console.log(num)
// find
const num2 = number.find(item => item >= 10)
console.log(num2)
// reduce
const num3 = number.reduce((acc, cur) => acc + cur , 0)
console.log(num3)
