// const data = [1, 2, 3, 4, 5];
// for (let i = 0; i <= data.length; i++) {
//     console.log(data[i])
// }

// به جای این کار از فور اف استفاده می کنیم
// for-of

// for (let i of data) {
//     console.log(i)
// }


const userData = {
    name : "erfan",
    age : 16,
    city : "Mashhad",
};
//  const keys = Object.keys(userData);
//  for (let i = 0; i < keys.length; i++) {
//      console.log(keys[i])
//      console.log(userData[keys[i]])
//  } 

// for-in
//  for (let item in userData) {
//      console.log(item);
//      console.log(userData[item])
//  }


// forEach

const names = ["erfan", "ali", "mamad", "sina"];
// names.forEach(function (item, index) {
//     console.log(item)
//   names[index] = item.toUpperCase()
// })
// names.forEach((item, index) => names[index] = item.toUpperCase() ) 
 
// console.log(names)

// map

const newNames = names.map(item => item.toUpperCase());
console.log(newNames)
console.log(names)
