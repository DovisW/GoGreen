$(function(){
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		// console.log(scrollTop);
		if(scrollTop>2){
			$('#header').css('box-shadow','0px 2px 10px black');
		}else{
			$('#header').css('box-shadow','none');
		}
	})
})