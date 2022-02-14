const data = {
    name: "Erfan",
    age : 17,
    sayHi : function () {
        console.log(`hI ${this.name}`)
        console.log(this)
    }
}

console.log(this)

data.sayHi();