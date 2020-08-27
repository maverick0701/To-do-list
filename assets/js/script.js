var next=$('#next');
var prev=$('#prev');
var divs=$('#left div');

divs.eq(0).addClass('class1')
var currentIndex=0;
prev.attr('disabled','true');
next.click(function(e)
{
    e.preventDefault();
    divs.eq(currentIndex).addClass('remClass');
    currentIndex++;
    divs.eq(currentIndex).removeClass('remClass');
    divs.eq(currentIndex).addClass('class1');
    if(currentIndex==0)
    {
        prev.attr('disabled','true');
        next.removeAttr('disabled','false');
       
    }
    else if(currentIndex==divs.length-1)
    {
        next.attr('disabled','true');
        prev.removeAttr('disabled','false');
    }
    else
    {
        next.removeAttr('disabled');
        prev.removeAttr('disabled');
    }
    
});

prev.click(function(e)
{
    e.preventDefault();
    divs.eq(currentIndex).addClass('remClass');
    currentIndex--;
    divs.eq(currentIndex).removeClass('remClass');
    divs.eq(currentIndex).addClass('class1');
    if(currentIndex==0)
    {
        prev.attr('disabled','true');
        next.removeAttr('disabled','false');
       
    }
    else if(currentIndex==divs.length-1)
    {
        next.attr('disabled','true');
        prev.removeAttr('disabled','false');
    }
    else
    {
        next.removeAttr('disabled');
        prev.removeAttr('disabled');
    }
    
})