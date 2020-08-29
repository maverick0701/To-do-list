const DailyEvents = require("../models/mongoose");

module.exports.home=function(req,res)
{
    
    DailyEvents.find({},function(err,DailyEvents)
    {

        if(err)
        {
            console.log('error');
            return;
        }
        return res.render('_home.ejs',{
            DailyEvent :DailyEvents
        });
    });
};

module.exports.homePost=function(req,res)
{
    console.log(req.body);
    
    DailyEvents.create({
            eventName:req.body.eventDes,
            date:req.body.eventDate,
            eventType:req.body.evenType
        },function(err, newEvent){
            if(err){console.log(err);
                return;}
                console.log('******',newEvent);
                return res.redirect('back');

        });

}

module.exports.deleteIt=function(req,res)
{
    let id = req.query.id;
    DailyEvents.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    });
}