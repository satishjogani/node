const http = require('http');
// http.createServer((req,resp)=>{
//     resp.write("<h2>Hello!!! Welcome to Node.js</h2>")
//     resp.end();
// }).listen(4500);

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify({name:'Satish Jogani', email:'satish@gmail.com'}));
    // resp.write({name:'Satish Jogani', email:'satish@gmail.com'});
    resp.end();
}).listen(3000);


const data= require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(2300);