// const os = require('os');
// console.log(os);

// console.log(os.homedir());
// const fs = require('fs');

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(error);
//         }
//         console.log('folder created');
//     });
// }else{
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// }

// const readStream = fs.createReadStream('./assets/docs/blog1.txt', 'utf-8');
// const writeStream = fs.createWriteStream('./assets/docs/blog2.txt');

// readStream.on('data',(chunk)=>{
//     console.log('----New Chunk----');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

console.log(global);