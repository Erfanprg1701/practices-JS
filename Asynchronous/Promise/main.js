console.log("start");

const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hi Im a promise");
        // resolve({name : "Erfan"})
        reject("eror!")
    }, 3000)
})

Promise1
    .then(user => console.log(user))
    .catch(err => console.log(err))


console.log("End")