const fs  = require('fs');

const readStream = fs.createReadStream('./assets/docs/blog3.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./assets/docs/blog4.txt');


// readStream.on('data', (chunk)=>{
//     console.log('----New Chunk----');
//     console.log(chunk);
//     writeStream('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });


// piping
readStream.pipe(writeStream);