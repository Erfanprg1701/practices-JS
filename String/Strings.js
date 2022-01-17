let string = "Hello world "
console.log(string.length)
// تعداد محتوا  داخل رشته را  نشان میدهد!
console.log(string[8])
// با این  کار از صفر عدد می دهیم نسبت به تعداد کاراکتر ها . و خروجی هر عدد داده شده  حرف آن را نشان میدهد

// console.log(string.toLowerCase())
console.log(string.toUpperCase())
// string = string.toUpperCase();
// console.log(string)

console.log(string.indexOf("e"))

console.log(string.substring(4, 7))

const newstring = string.split("  ");
console.log(newstring)

string = string.replace("world", "world to");
console.log(string)

console.log(string.includes("Hello"));

// templste literals
const str1 = "Hi"
const str2 = "i`m"
const str3 = "erfan"
const newStr = `${str1} ${str2} ${str3} "how are you?"` ;
console.log(newStr )

const str4 = "hello Erfan"
const str5 = str4.substring(6);
console.log(str5)
const str6 = `my name is ${str5}`;
console.log(str6);