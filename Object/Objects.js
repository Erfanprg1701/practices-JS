// const obj = {
//     name : "erfan",
//     lastName : "pr",
//     age : 16 ,
//     sibling : ["string1", "String2"],
//     marks : {
//         english : 16,
//         math : 19,
//     }
// }
// const objc = {
//     first : "ali",
//     scound : "mamad"
// }
// const obj2 = "age"
// console.log(obj[obj2])
// console.log(obj["marks"].math)

// obj.career = "programer"
// console.log(obj);
// delete obj.age;
// console.log(obj)

// const newObj = {...obj, ...objc}
// جمع کردن آبجکت ها
// console.log(newObj)


// practice
  
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
// const name = data.uname;
// const city = data.address.city;
// const street = data.address.street;
const { uname, address: {city, street} } = data ;
// const {city, street} = data.address;
// detructuring
// این روش در اکما اسکریپت 6 معرفی شده و در یک خط کد می توان چند کلید را فراخوانی و سپس استفاده کرد
const Introduction = `hi im ${uname} i live in ${city} to street ${street} `;
console.log(Introduction)


// انتخاب جداگانه کلید یا محتوا :
const keys = Object.keys(data)
console.log(keys)
const values = Object.values(data)
console.log(values)
