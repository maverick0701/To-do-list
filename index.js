const express=require('express');
const port=8000;
const app=express();
const router=require('./router/index');
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');
//midlleware


//stting up layouts
app.use(expressLayouts);
//extracting css ang script files
app.set('layout extractStyles', true);
app.set('layout extractScript', true);

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//setting up routes
app.use('/',router);

//setting up static files
app.use(express.static('./assets'));


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