const express=require('express');
const port=8000;
const app=express();
const router=require('./router/index');

//midlleware

app.use('/',router);



//listens to the assigned port
app.listen(port,function(err)
{
    if(err)
    {
        console.log('error');
        return;
    }
    console.log(port);
    
});