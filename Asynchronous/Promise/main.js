console.log("start");

function userData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name : "Erfan"})
        }, 3000)
    })
    
}
userData()
    .then(user => console.log(user))
    .catch(err => console.log(err))

// async function displayData() {
//     const tset = await userData();
//     console.log(tset)
// }


console.log("End")