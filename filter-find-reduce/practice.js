const number = [
    { name :"Erfan", marks : [18, 19, 15, 20, 20, 17]},
    { name :"ali", marks : [12, 19, 20, 9, 20, 10]},
    { name :"mamd", marks : [12, 19, 19, 19, 15, 11]},
    { name :"mina", marks : [12, 19, 15, 16, 19, 9]},
    { name :"sina", marks : [12, 19, 12, 16, 15, 19]},
    { name :"tina", marks : [12, 19, 13, 17, 19, 17]},
    { name :"nima", marks : [12, 19, 12, 11, 2, 18]},
];

const user = number.map(item =>{
    const sum = item.marks.reduce((acc, cur) => acc + cur, 0);
    const ave = sum / item.marks.length;
    const aveFixed = ave.toFixed(2)
    console.log(`${item.name}, your rate is ${aveFixed}`)
    item.rate = ave;
    return item 
}) 
console.log(user)