const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    resp.send(`
        Hello ${req.query.name} !!!<br>
        <h1>Welcome to my Program</h1><br>
        <a href='/about'>About Us</a><br>
        <a href='/register'>Register</a><br>
        `);
});

app.get('/about',(req,resp)=>{
    resp.send(`
        <h1>Welcome on About Us Page</h1>
        <br>This is Node.js Express.js about us page.
        <br><br><a href="/">Home</a>
        <br><a href="/register">Register</a>`);
});

app.get('/register',(req,resp)=>{
    resp.send(`
        <br><h1>Registration</h1>
        <br>Name: <input type="text" placeholder="${req.query.name}">
        <br>Email: <input type="email" placeholder="your@gmail.com">
        <br><button>Submit</button>
        <br><br><a href="/">Home</a>`);
});

app.get('/data',(req,resp)=>{
    resp.send([
        {
            name:'satish',
            email:'satish@gmail.com'
        },
        {
            name:'hardik',
            email:'hardik@gmail.com'
        }
        ]);
});

app.listen(3500);