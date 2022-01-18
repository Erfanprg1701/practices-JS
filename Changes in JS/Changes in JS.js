
const address = document.getElementById("address");
address.innerText = "Github"
address.href = "https://github.com"
const p = document.getElementsByClassName("paragraph");
// console.log(p[0].className)
// console.log(p[0].innerText)
// console.log(p[0].innerHTML)
// p[0].innerText = "erfan"

// p[0].innerText = "<span> erfan </span>" 
// Do not use!

p[0].innerHTML = "<span> erfan </span>" 


const header = document.querySelector("#header");
// header.id = "header2"
header.style.color = "blue"
header.style.background = "green"
header.style.display = "inLine"
// در اینجا دیگر از خط فاصله برای کلاس هایی مانند فونت سایز استفاده نمی کنیم بلکه از کمل کیس ها استفاده می کنیم
// fontSize
header.style.fontSize = "3rem"
