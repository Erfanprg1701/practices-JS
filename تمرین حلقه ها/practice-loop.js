// practice1

// const contact = ["milad-09920002233", "erfan-09041113344", "reza-09155552233", "nima-09034446688"];
// const SearchName = prompt("inter your name:");
// for ( let i = 0 ; i < contact.length ; i++) {
//     let splitedName = contact[i].split("-");
//     if (splitedName[0] === SearchName) {
//         console.log(`Hi ${splitedName[0]} your number is ${splitedName[1]}`)
//         break;
//     }
//     // }else {
//     //     console.log("user not found!");
//     // }
// }

// در اینجا اول چند تا اسم و شماره را قرار  دادیم
// سپس با پرامپت متغیری تعریف کردیم برای وارد کردن اسم
// بعد از آن با حلقه ها شرط دادیم با یک متغیر که تعریف کردیم تا زمانی که به تعداد آرایه ها بود حلقه را ادامه بده
// و بعد داخل آن گفتیم که با توجه به خط وسط هر آرایه آن را جدا و اسپلیت کرد
// بعد شرط گذاشتیم که اگر اسم اول ارایه با اسم داخل پرامپت برابر بود به ما شماره را در کنسول نشان دهد
// و خط را بریک کند که دوباره اجرا نشود
// و در انتها به آن گفتیم در غیر این صورت خطا بدهد!


// Practice2

// نوع اول
// let number = prompt("inter your number");
// for (let i = 1; i <= number ; i++) {
//     let root = Math.sqrt(i);
//     if (Math.floor(root) == root) {
//              console.log(root)
//         }
// }
// در نوع اول فقط جذر اعداد را نشان می دهد.


// نوع دوم

// let number2 = prompt("inter your number");
// for (let i = 1; i <= number ; i++) {
//     let root = Math.sqrt(i);
//     if (Math.floor(root) !== root) {
//         continue;
//     } else if (Math.floor(root) == root) {
//         console.log(root)
//     }
//     console.log(i)
// }


// ولی در نوع دوم ود عدد صحیح هم به ما می دهد

