const mongoose=require('mongoose');

const eventSchema=new mongoose.Schema({
    eventName:
    {
        type: String,
        required:true
    },
    date:
    {
        type: String,
        required:true
    },
    eventType:
    {
        type :String,
        required:true
    }
});

const DailyEvent= mongoose.model('DailyEvent',eventSchema);

module.exports=DailyEvent;