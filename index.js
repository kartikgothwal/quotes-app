const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const homefile = fs.readFileSync('./home.html', "utf-8");
const staticpath =path.join(__dirname,"./css");
const staticpathimges =path.join(__dirname,"./image");
// console.log(homefile);
 
console.log(staticpath)
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(homefile)
    res.send()
})
app.use(express.static(staticpath));
app.use(express.static(staticpathimges));

app.listen(2000, "127.0.0.1", () => {
    console.log(`listening to this server http://127.0.0.1:2000/`)
})


