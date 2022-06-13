// console.log("This is Promise.");
// setTimeout(()=>{
//     console.log("This is 2sec. setTimeout.");
//   },2000);
// console.log("This is Done.");

let a=30;
let b=20;

let newb = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(50);
    },2000)
})
newb.then((b)=>{
    console.log(a+b);
})