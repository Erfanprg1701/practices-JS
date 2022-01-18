const div = document.querySelector(".container")
// console.log(div.children)
// console.log(div.firstElementChild)
// console.log(div.lastElementChild)
// console.log(div.nextElementSibling)
const p = document.querySelector(".praph")
// console.log(p.parentElement)
// console.log(p.parentElement.parentElement)


const ul = document.querySelector("ul")
// console.log(ul.previousElementSibling)



// اضافه و حذف کردن یک المنت

const element = document.createElement("a");
element.id = "anchor";
element.className =  "class1"
element.innerText = "google"
element.setAttribute("href", "https://google.com");
div.appendChild(element)
// div.innerHTML = "<a href='https://google.com'> hi </a>"

// حذف 
// p.remove()

// جا به جایی
// div.replaceChild(element, p)