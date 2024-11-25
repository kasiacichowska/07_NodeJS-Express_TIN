const express = require('express');
const path=require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');



app.listen(3000);
console.log("http://localhost:3000");
