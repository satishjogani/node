const bmw = {name:"BMW"};
const audi = {name:"Audi"};
const tata = {name:"TATA"};
const kia = {name:"KIA"};
const cars = new Map();

cars.set(bmw,200);
cars.set(audi,300);
cars.set(tata,400);
cars.set(kia,500);
// console.log(cars);

const app = cars.get(tata);
console.log(app);

