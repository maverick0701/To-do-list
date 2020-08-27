const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/ToDOList_development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connection'));

db.once('open',function()
{
    console.log('connected to database');
});

module.exports=db;