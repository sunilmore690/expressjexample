const express = require('express')
let app = express();
app.get('/',(req,res,next)=>{
    res.send('Welcome to Express App')
})
app.listen(3000,()=>{
    console.log('Server listening on 3000')
})