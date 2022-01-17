// destructuring
// Object
const data = {
    id: 1 ,
    uname: "Erfan",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Newyork",
        zipcode: "92998-3874",
        geo:{
            let:"-37.3159",
            lng:"81.1496"
        }
    }
}
const { uname, address : { city, street} } = data ;

// const {city, street} = data.address;
// detructuring
// این روش در اکما اسکریپت 6 معرفی شده و در یک خط کد می توان چند کلید را فراخوانی و سپس استفاده کرد
const Introduction = `hi im ${uname} i live in ${city} to street ${street} `;
console.log(Introduction)




// destructuring
// Array
const array = ["Erfan", "Milad", "Ali", { name: "ali"} ] 
const [dest1, dest2, dest3, {name}] = array;
// از ایندکس صفر شروع می شود به ترتیب!
// برای کوتاه تر شدن خط کد اگر مثلا به ایندکس 2 نیاز نداشتیم جای ان را خالی میکنیم ولی ,,  باید باشد
// const [dest1,,dest3]
console.log(name)




// practice

const data2 = [
    {
        id:1,
        lastname: "erfan prg org str",
        email2: "erfan@gmail.com",
        content: "hi thanx for your web that is emazing!!!"
    },
    {
        id:2,
        lastname:"ali prg org str",
        email2:"ali@gmail.com",
        content: "hello than you bro!!"
    },
     [
        "milad",
        "ali"
    ]
]
// راهی ساده برای سلکت و خروجی گرفتن از ابجکت در آرایه ها
// و همچنین آرایه در آرایه

const [user1, user2, user3] = data2 ;
// const [user4, user5] = user3;
// // // برای آرایه
// console.log(user4)
// const {lastname, content} = user1;
// برای آبجکت
// console.log(lastname , content)

// تمرین
// ای دی شخص و اول اسم و ایمیل را بگیرید و داخل یک رشته آن را تعریف نموده و به شخص نشان دهید
const {id, lastname, email2} = user1
const spliedName = lastname.split(" ")
console.log(spliedName)
const string1 = `Hi ${spliedName[0]} your email is (${email2}) and your ID is (${id})`
console.log(string1)