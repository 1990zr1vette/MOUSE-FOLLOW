var speed = 250;

$(function () 
{
    $('.image-wrap').hover(
    	function (event) 
    	{
        	if ($(this).getMouseSide(event) == 'left')
        	{
        		$(this).parent().find('.image-overlay').css('height',$(this).height()).css('left','0px');
        		$(this).parent().find('.image-overlay').css('width',0).css('top','-' + $(this).height() + 'px');
        		$(this).parent().find('.image-overlay').css('visibility','visible');
        		$(this).parent().find('.image-overlay').stop().animate({width:$(this).width()},speed,function(){});
        	}
        	else if ($(this).getMouseSide(event) == 'right')
        	{
        		$(this).parent().find('.image-overlay').css('height',$(this).height()).css('top','-' + $(this).height() + 'px');
        		$(this).parent().find('.image-overlay').css('width',0).css('left',$(this).width());
        		$(this).parent().find('.image-overlay').css('visibility','visible');
        		$(this).parent().find('.image-overlay').stop().animate({width:$(this).width(),left:0},speed,function(){});
        	} 
        	else if ($(this).getMouseSide(event) == 'top')
        	{
        		$(this).parent().find('.image-overlay').css('width',$(this).width()).css('left','0px');
        		$(this).parent().find('.image-overlay').css('height',0).css('top','-' + $(this).height() + 'px');
        		$(this).parent().find('.image-overlay').css('visibility','visible');
        		$(this).parent().find('.image-overlay').stop().animate({height:$(this).height()},speed,function(){});
        	}
        	else if ($(this).getMouseSide(event) == 'bottom')
        	{
        		$(this).parent().find('.image-overlay').css('width',$(this).width()).css('left','0px');
        		$(this).parent().find('.image-overlay').css('height',0).css('top',0);
        		$(this).parent().find('.image-overlay').css('visibility','visible');
        		$(this).parent().find('.image-overlay').stop().animate({height:$(this).height(),top:'-100%'},speed,function(){});
        	}        	
    	}, 
    	function (event) 
    	{
    		var imageOverlay = $(this).parent().find('.image-overlay');
        		
        	if ($(this).getMouseSide(event) == 'left')
        	{
        		$(imageOverlay).stop().animate({width:0},speed,function()
        		{
        			$(imageOverlay).css('visibility','hidden');      		
        		});
        	}
        	else if ($(this).getMouseSide(event) == 'right')
        	{
        		$(imageOverlay).stop().animate({width:0,left:$(this).width()},speed,function()
        		{
        			$(imageOverlay).css('visibility','hidden');
        		});
        	} 
        	else if ($(this).getMouseSide(event) == 'top')
        	{
        		$(imageOverlay).stop().animate({height:0},speed,function()
        		{
        			$(imageOverlay).css('visibility','hidden');
        		});
        	}
        	else if ($(this).getMouseSide(event) == 'bottom')
        	{
        		$(imageOverlay).stop().animate({height:0,top:0},speed,function()
        		{
        			$(imageOverlay).css('visibility','hidden');
        		});
        	}      	
    	}
    );

    $.fn.getMouseSide = function (event) 
    {
    	var leftDiffernce = event.pageX - $(this).position().left;
    	var rightDiffernce = ($(this).position().left + $(this).width()) - event.pageX;

    	var topDiffernce = event.pageY - $(this).position().top;
    	var bottomDiffernce = ($(this).position().top + $(this).height()) - event.pageY;

    	if (leftDiffernce < rightDiffernce && leftDiffernce < topDiffernce && leftDiffernce < bottomDiffernce)
    		return 'left';
		else if (rightDiffernce < leftDiffernce && rightDiffernce < topDiffernce && rightDiffernce < bottomDiffernce)
    		return 'right';
		else if (topDiffernce < leftDiffernce && topDiffernce < rightDiffernce && topDiffernce < bottomDiffernce)
    		return 'top';
		else if (bottomDiffernce < leftDiffernce && bottomDiffernce < rightDiffernce && bottomDiffernce < topDiffernce)
    		return 'bottom';
    }
});