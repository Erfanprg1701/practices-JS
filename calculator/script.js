let displayBox = document.querySelector(".display");
// در اینجا اول قسمتی که عملیات انجام می شود و اعداد را نشان می دهد را سلکت میکنیم

function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}
// در این فانکشن در متغیر ایکس محتوای داخل شودیسپلی که اعداد و عملیات ها است را قرار می دهیم
// سپس شرطی قرار میدهیم که اگر داخل دیسپلی عدد مساوی صفر بود
// محتوا دیسپلی را مساوی ایکس قرار بدهد 
// و محتوا دیسپلی را به ایکس اضافه کند
function calculate() {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result);
};
// این فانکشن تعریف کلیک مساوی است
// به این صورت که با یک متغیر محتوای دیسپلی را  میگیریم 
//   قرار میدهیم و متغیر را داخل آن می ریزیم eval و دیسپلی را مساوی فانکشن
// به این صورت تعریف می شود که اگر داخل یک رشته محتوای عددی و عملیاتی وجود داشت به عملیات ریاضی تبدیل کند و نشان دهد eval در فانکشن  
function allClear() {
    displayBox.innerText = 0;
}
// این فانکشن تمامی محتوای دیسپلی را مساوی صفر می کند
function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else { 
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}
// این فانکشن  به این گونه تعریف می شود که اگرتعداد محتوا دیسپلی یکی بود آن را صفر کند
// در غیر این صورت از آن یکی یکی کم کند تا به صفر برسد
document.querySelector(".calculate").addEventListener("click", calculate);
// در داخل آن است وصل میکند calculate این کد مساوی را گرفته و آن را به یک کلیک که فانکشن 
document.querySelector(".all-clear").addEventListener("click", allClear);

document.querySelector(".clear-last").addEventListener("click", clear);

let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})
// این متغیر اعداد و عملیات ها را گرفته است و با حلقه ها کلیک را تعریف کرده و  با فانکشن شودیسپلی  آن وصل کرده است