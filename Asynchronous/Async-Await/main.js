console.log("staet")


function Async() {
    setTimeout(() => {
        console.log("test")
    }, 3000);
}

Async();

async function  userAsync() {
    const test = await Async();
    console.log(test)
} 

console.log("End")