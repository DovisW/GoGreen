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
	var flog = 4 ;
	$('.button_Previous').click(function(){
		flog--;
		var num = flog*(-300)+'px';
		$('.best_banner_content').stop(true,false).animate({'left':num},'slow',function(){
			if(flog<0){
				$('.best_banner_content').css('left','-900px');
				flog = 3;
			}
		})
	})
	$('.button_Next').click(function(){
		flog++;
		var num = flog*(-300)+'px';
		$('.best_banner_content').stop(true,false).animate({'left':num},'slow',function(){
			if(flog>12){
				$('.best_banner_content').css('left','-900px');
				flog = 3;
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
