const userData = [
    {name : "erfan", age : 16},
    {name : "mamad", age : 20},
    {name : "sara", age : 19},
    {name : "ali", age : 10},
    {name : "zahra", age : 32},
    
]


const ul = document.createElement("ul");
ul.style.listStyle = "none"
ul.style.color = "green"
const container = document.querySelector(".container").appendChild(ul)
userData.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `hi  ${item.name} your age is ${item.age}`
    ul.appendChild(li);
}) 

console.log(ul)



