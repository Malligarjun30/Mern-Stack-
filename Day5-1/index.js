const express=require('express');
const path=require('path');
const app = express();
app.use(express.static(path.join(__dirname + '/public'+'/clg')));
app.use('/about',express.static(path.join(__dirname + '/public'+'/about')));
app.use('/home',express.static(path.join(__dirname + '/public'+'/home')));
app.use('/contact',express.static(path.join(__dirname + '/public'+'/contact')));
app.listen(5000,()=>{
    console.log("App listening");
})

