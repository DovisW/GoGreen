var banner = document.getElementsByClassName('banner_box');
var button_left = document.getElementsByClassName('button_left')[0];
var button_right = document.getElementsByClassName('button_right')[0];
var num = 0,timer ;
button_left.onclick =function(){
	num--;
	if(num<0){
		num=2;
	}
	for(var i=0;i<banner.length;i++){
		banner[i].style.display="none";
	};
	banner[num].style.display="block";
}
button_right.onclick =function(){
	num++;
	if(num>=3){
		num=0;
	}
	for(var i=0;i<banner.length;i++){
		banner[i].style.display="none";
	};
	banner[num].style.display="block";
}
button_left.onmouseover = function(){
	clearInterval(timer);
}
button_right.onmouseover = function(){
	clearInterval(timer);
}
button_left.onmouseout = function(){
	timer = setInterval(fun,3000);
}
button_right.onmouseout = function(){
	timer = setInterval(fun,3000);
}
function fun(){
	num++;
	if(num>=banner.length){
		num=0;
		for(var i=0;i<banner.length;i++){
				banner[i].style.display="none";
			}	
	}
	banner[num].style.display="block";
}
timer = setInterval(fun,3000);

$(function(){
	window.onload = function(){
		$.ajax({
			url:'/index',
			type:'post',
			data:{},
			success:function(data){
				var div = $('.slider');
				for(var i=0;i<div.length;i++){
					$(div[i]).find('img').attr('src','../images/index/'+data[i%4].image);
					$(div[i]).find('.slider_money').text(data[i%4].money);
					$(div[i]).find('.slider_text').text(data[i%4].message);
				}
			}
		})
	}

	var flog = 4 ;
	var width = $('#slider').outerWidth(true);
	$('.best_banner_content').css({'left':-4*width+'px','width':12*width+'px'});
	$('.button_Previous').click(function(){
		flog--;
		var num = flog*(-width)+'px';
		$('.best_banner_content').stop(true,false).animate({'left':num},'slow',function(){
			if(flog<=0){
				$('.best_banner_content').css('left',-4*width+'px');
				flog = 4;
			}
		})
	})
	$('.button_Next').click(function(){
		flog++;
		var num = flog*(-width)+'px';
		$('.best_banner_content').stop(true,false).animate({'left':num},'slow',function(){
			if(flog>=8){
				$('.best_banner_content').css('left',-4*width+'px');
				flog = 4;
			}
		})
	})
	$('#container').sliphover({
		height:'100%',
		target:'img',
		duration:'fast',
		backgroundColor:'rgba(18,95,6,0.5)'
	});
})
