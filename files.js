const fs = require('fs');

// fs.readFile('./assets/docs/blog1.txt', 'utf-8', (err, data)=>{
//     console.log(data.toString());
// });


// fs.writeFile('./assets/docs/blog2.txt', 'hello world, welcome to another node js tutorial', (err)=>{
//     if(err){
//         console.log(err);
//     }      
//     console.log('file written successfully');        
// });


// if(!fs.existsSync('./prod')){
//     fs.mkdir('./prod', (err)=>{
//         if(err){
//             console.log(err);
//         }
//     });
//     console.log('folder created');
// }else{
//     fs.rmdir('./prod',((err)=>{
//         if(err){
//             console.log(err);
//         }
//     }))
//     console.log('folder deleted');
// }

if(fs.existsSync('./prod/blog1.txt')){
    fs.unlink('./prod/blog1.txt', (err)=>{
        if(err){
            console.log(err);
        }
    });
    console.log('file deleted');
}else{
    console.log('file does not exist');
}
