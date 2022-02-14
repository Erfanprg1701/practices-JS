// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.onload = () => {
//     const  dataRequset = xhr.response ;
//     const data = JSON.parse(dataRequset);
//     console.log(data)
// }

// xhr.send()


// POST = API برای ساختن و گرفتنیک یا چند آبجکت از 

// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

// const body = {
//     title : "erfan",
//     userId : 1
// }

// xhr.setRequestHeader("Content-type", "Application/json")

// xhr.onload = () => {
//     const  dataRequset = xhr.response ;
//     const data = JSON.parse(dataRequset);
//     console.log(data)
//     console.log(xhr.status)
// }

// xhr.send(JSON.stringify(body));


// fetch = روشی ساده تر برای دریافت ای پی آی

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))
// برای گت 


fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST',
    body : JSON.stringify({
        name : "ERFAN",
        userId : 1,
    }),
    headers : {
        'Content-type' : 'Application/json; Chrset=UTF-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))