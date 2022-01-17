const number = 5;
const Booleans = true;
const Array1 = [ "ali", "erfan"]
const object1 = { name: "ali"}

const str1 = String(number)
console.log( str1)
console.log(typeof str1)

const str2 = String(Booleans)
console.log(str2)
console.log(typeof str2)

const str3 = String(Array1)
console.log(str3)
console.log(typeof str3)

const str4 = String(object1)
console.log(str4)
console.log(typeof str4)

// در عدد ها هم به همین صورت عمل می شود.
//  وارد میکند ولی تایپ عدد هست NaN ولی با کمی تغییرات که اگر کلمه باشد 
//  true = 1 , false = 0 , null = 0 
const value = 55.68746 ;
// const newVal = parseInt(65.635)
// const newVal = parsefloat(65.635)
const newVal = value.toFixed(3)
console.log(newVal)


// تبدیل تایپ بیشتر برای رشته ها و عدد ها مورد استفاده قرار می گیرد.
// ولی برای  بقیه هم به همین صورت استفاده می شود.
