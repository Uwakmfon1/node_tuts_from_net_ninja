const http = require('http');
const fs = require('fs');
const _ = require ('lodash');


const server = http.createServer((req, res)=>{
    const num = _.random(0,20);
    console.log(num);



    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
        case '/about-me':            
            res.setHeader('Location', '/about');
            res.statusCode=301;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode=200;
            break;
        default:
            path += '404.html';
    }

    fs.readFile(path, (err, data)=> {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });


});

server.listen(3002, 'localhost', ()=> {
    console.log('server is listening on port 3002');
});