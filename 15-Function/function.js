// روش اول
// کاربردی


function number(one) {
    console.log(`my number is ${one}`)
}
number(1)

let name = "erfan"
let namesum = "hi"
function sum(namesum) {
    let num = name + "prg"
    const obj = {
     age : 16,
     city : "mashad",
    };
    const {age, city} = obj
    console.log(`hi my name is ${num} im ${age} years old , i live in the ${city} city`)
}
sum(namesum);


function number1(num1, num2, num3 = 3) {
    let math =  (num1 + num2) * num3 ;
    // console.log(math)
    return math;
}

const math1 = number1(3, 3, 5);
console.log(math1)

// ورش دوم
// در این روش اگر کنسول را در بالای این فانکشن قرار بدهیم اجرا نمی شود. ولی در روش اول و اصلی اجرا می شود
const type2 = function(num3, num4, num5) {
    let math3 = (num3 + num4) * num5 ;
    return math3;
}
console.log(type2(3,3,6))



// practice

// function toCg(fe) {
//     const result = (5/9) * (fe - 32);
//     return result;
// }

// let temp = toCg(prompt("inter number"));
// console.log(temp.toFixed(2));
// // const int = temp.toFixed(2);
// // console.log(int)




// IIFE

// (function (name) {
//     console.log("hello world" + " " + name);
// })("erfan");

// arrow function 

// function number1(num1, num2, num3 = 3) {
//     let math =  (num1 + num2) * num3 ;
//     // console.log(math)
//     return math;
// }

// const math1 = number1(3, 3, 5);
// console.log(math1)

const arrow = (num1, num2, num3) =>  (num1 + num2) * num3;
console.log(arrow(3,4,5))