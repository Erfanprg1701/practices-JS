// Symbol
const age =Symbol();
console.log(age)
const name = Symbol();
console.log(name)

const data = {
 [name]: "ali",
    age : 25,
    career: "programer"
}

console.log(data)