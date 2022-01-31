const click = document.querySelector("button");

const div = document.querySelector("div");
click.addEventListener("click", setTime);

function setTime() {
    setInterval(clickTime, 1000)
}
function clickTime(){
    console.log("test")
    const p = document.createElement("p");
    p.innerText = "hi";
    p.classList.add("pr")
    div.appendChild(p)
}