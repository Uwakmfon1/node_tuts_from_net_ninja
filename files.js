const fs = require('fs');

fs.readFile('./assets/docs/blog1.txt', 'utf-8', (err, data)=>{
    console.log(data);
});