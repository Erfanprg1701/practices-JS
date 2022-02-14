const userData = [
    {name : "erfan", age : 16},
    {name : "mamad", age : 20},
    {name : "sara", age : 19},
    {name : "ali", age : 10},
    {name : "zahra", age : 32},
    
]
const bn = document.querySelectorAll("button");
bn.forEach(item => {
    item.addEventListener("click", clickH)
})


function clickH(event) {
    // const ul = document.createElement("ul");
    // ul.style.listStyle = "none"
    // ul.style.color = "green"
    // const container = document.querySelector(".container").appendChild(ul);
    // let a = userData.forEach(item => {
    //     const li = document.createElement("li");
    //     li.innerText = `hi  ${item.name} your age is ${item.age}`
    //     ul.appendChild(li);
        
    // }) 
    console.log(event.target)
    event.target.style.color = "red"
}

const anchor = document.querySelector("a");
anchor.addEventListener("click", function(event){
    event.preventDefault();
    const a = document.createElement("a");
    const container = document.querySelector(".container").appendChild(a);
    a.innerText = "google"
    a.href = "https://google.com";
    // این دستور از حالت دیفالت یک المنت جلوگیری می کند
    console.log(event.target);
})
