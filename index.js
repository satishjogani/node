console.log("Welcome To My First Node.js Program!");
var a=20;
// if(a==20)
// {
//     console.log("Metched a="+a);
// }

// for(let i=0;i<=5;i++)
// {
//     console.log(i);
// }

// const app = require('./app');
// console.log(app);
// console.log(app.x);
// console.log(app.z());

// const arr= [2,4,6,8,9,33];
// // console.log(arr);
// console.log(arr[2]);
// arr.filter((item)=>console.log(item));
// arr.filter((item)=>{
//     console.log(item);
// })
// let res= arr.filter((item)=>{
//     return item >=6;
// })
// console.log(res);

// File System
const fs = require('fs');

// fs.writeFileSync("hello1.txt","Hello, Satish Jogani!!");
// const fs = require('fs').writeFileSync;
// fs("abc.txt","Hello File.");

// const input= process.argv;
// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3]);
// }
// else
// {
//   console.log('Invalid Input')  ;
// }

const path = require('path');
const dirPath = path.join(__dirname,'crud');
// console.log(dirPath);
// for(i=1;i<=5;i++)
// {
//   fs.writeFileSync(dirPath+"/satish"+i+".txt","Loops of Files.");
// }

// fs.readdir(dirPath,(err,files)=>{
//   files.forEach((file)=>{
//     console.warn("File Name is",file);
//   })
// })

const filePath = `${dirPath}/satish.txt`;
// Create File
fs.writeFileSync(filePath,'This is crud new file with `.');

// Read File
// fs.readFile(filePath,'utf8',(err,item)=>{
//   console.log(item);
// })

// Update File
// fs.appendFile(filePath,' Please Check it.',(err)=>{
//   if(!err) console.log("File Updated!!");
// });

// Rename File
// fs.rename(filePath,`${dirPath}/jogani.txt`,(err)=>{
//   if(!err) console.log("File name is updated!!");
// });

// Delete File
// fs.unlinkSync(`${dirPath}/jogani.txt`);

// The For/Of Loop
// const cars = ["BMW", "Volvo", "Mini"];
// let txt = "";
// for(let x of cars)
// {
//     txt += x + " ";
//     console.log(txt);
// }

// let language = "JavaScript";
// let txt = "";
// for (let x of language) {
//     txt += x + " ";
//     console.log(txt);
// }

// JavaScript Maps
const apple = {name:"Apple"};
const mango = {name:"Mango"};
const banana = {name:"Banana"};
const  fruits = new Map();

fruits.set(apple,500);
fruits.set(mango,300);
fruits.set(banana,200);
// console.log(fruits);
// const app = fruits.get(apple);
// console.log(app);
// console.log(fruits.get(mango));
// console.log(fruits.has(mango));
// const size = fruits.size;
// console.log(size);
// fruits.delete("banana");
// console.log(fruits.has(mango));
// // fruits.clear();
// console.log(typeof fruits);

const car = new Map([
    ["BMW", 1000],
    ["Ferari", 3000],
    ["Kia", 200]
]);
// Map.forEach()
let text = "";
// car.forEach(function(value, key){
//     text = key +"=" +value;
//     console.log(text);
// })
     
// Map.entries()
// for(const c of car.entries())
// {
//     text += c;
//     console.log(text);
// }

// Map.keys()
// for(const c of car.keys())
// {
//     text = c;
//     console.log(text);
// }

// Map.values()
// for(const c of car.values())
// {
//     text = c;
//     console.log(text);
// }

// let total =0;
// for(const x of car.values())
// {
//     total += x;
//     console.log(total);
// }

// SET
// const ex = new Set();
// ex.add('a');
// ex.add('b');
// ex.add('a');
// console.log(ex);

//Dta
const express = require('express');
const app = express();
var bodyParse = require('body-parser');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
connection.connect();
// app.use(bodyParse);
app.use(bodyParse.json());

app.post('/save',(req,resp)=>{

    let _id = new Promise(function(resolve, reject){
        connection.query("INSERT INTO data SET ?", req.body,(err, res, fileds)=>{
            if(err)
                reject(err)
            else
                resolve(res.insertId);
        })
    }); 

    _id.then(function(val){
        resp.send(`id= ${val}`);
    }, function(err){
        console.info('Error ::', err)
        resp.send(`Errr`);
    });
    
});
app.listen(5100);


