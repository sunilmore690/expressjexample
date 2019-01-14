const express = require('express')
let app = express();
app.get('/',(req,res,next)=>{
    res.send('Welcome to Express App - Version1')
})
app.get('/admin',(req,res,next)=>{
    res.send('Welcome to Express App - Admin')
})
app.listen(3000,()=>{
    console.log('Server listening on 3000')
})