const names = ["erfan", "ali", "mamad", "sajad"]
const num = [1, 5, 25, 54, 67, 44]
console.log(names)
console.log(names[2])

names.push("ali")
console.log(names)

names.unshift("reza")
console.log(names)

names.pop()
console.log(names)

names.shift()
console.log(names)

names[2] = "alireza" ;
console.log(names)

names[0] = "ErfanPrg" ;
console.log(names)


// names.splice(1,3);
// console.log(names)


// console.log(names.sort)
// console.log(names.reverse())

// const newarray = names.concat(num)
// console.log(newarray)

// const newarray = [...names, ...num, "hi"];
// console.log(newarray)

// practice

const name0 = [["Milad", "Ali"], ["andy", "sandy", "mandy"]];
const name1 = name0[0];
const name2 = name0[1];
// const newName = name1.concat(name2)
const newName = [...name1, ...name2];
const newName2 = newName.sort();
console.log(newName2)
const carater = newName2[2];
const carater2 = ` Hi, ${carater} `
console.log(carater2)


// practice is pass
