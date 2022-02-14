// class Laptop {
//     constructor (name, RAM, CPU) {
//         this.name = name
//         this.RAM = RAM
//         this.CPU = CPU
//     }
// // هم میتوانیم ورودی بدهیم که در  زمان استفاده  به هر عنصر یک ویژگی خاص بدهیم 
// // هم میتوانیم در قسمت محتوا هر ویژگی آن ها را بنویسیم و در همه عناصر استفاده کنیم
//     speed() {
//         console.log(`I go fast`)
//         console.log(this)
//     }

// }

// const laptop1 = new Laptop("Apple", "2G","i5" );
// laptop1.speed();

// const laptop2 = new Laptop("acer", "4G","i3" );
// laptop2.speed();


// ارث بری:
class Default {
    constructor(name, color){
        this.name = name;
        this.color = color;

    }

    move() {
        console.log("i move")
    }
}

class Laptop extends Default {
    constructor (name, color, RAM, CPU) {
        super(name, color);
        this.RAM = RAM
        this.CPU = CPU
    }
// هم میتوانیم ورودی بدهیم که در  زمان استفاده  به هر عنصر یک ویژگی خاص بدهیم 
// هم میتوانیم در قسمت محتوا هر ویژگی آن ها را بنویسیم و در همه عناصر استفاده کنیم
    speed() {
        console.log(`I go fast`)
        console.log(this)
    }

}

const laptop1 = new Laptop("Apple","Black", "2G","i5" );
laptop1.speed()
laptop1.move();

const laptop2 = new Laptop("acer", "4G","i3" );
laptop2.speed();

