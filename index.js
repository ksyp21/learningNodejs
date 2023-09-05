const { isUtf8 } = require('buffer');
const fs = require('fs')

fs.readFile('./files/starter.txt', utf8, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

//exit on uncaught error
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error:${err}`);
    process.exit(1);
})