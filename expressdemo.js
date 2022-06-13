const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    // http://localhost:5000/?name=Satish
    console.log('Browser send data ==> ',req.query.name)
    resp.send('Hello, ' +req.query.name +'<br>This is Home Page.<br><a href="/about">About Us</a>');
});

app.get('/about',(req,resp)=>{
    resp.send(`
        Welcome on our About us page. <a href="/">Home</a><br><br>
        <input type="text" placeholder="Username" value="${req.query.name}">
        <button>Click Me!!</button>
        `);
});

app.get('/contact',(req,resp)=>{
    resp.send(
        // '<h1>Contact Us</h1>'
        [
            {
                name: 'Satish',
                email: 'satish@gmail.com'
            },
            {
                name: 'Hardik',
                email: 'hardik@gmail.com'
            }
        ]
        );
});

app.listen(5000);