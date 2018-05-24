$(function(){
	//数据库
	window.onload = function(){
		$.ajax({
			url:'/shop',
			type:'post',
			data:{},
			success:function(data){
				// console.log(data);
				for(var i=0;i<data.length;i++){
					var li = $('.getli');
					$(li[i]).children('img').attr('src','../images/'+data[i].img);
					// $(li[i]).children('div').eq(0).text(data[i].price).siblings();\
					$(li[i]).children('div').find('p:first').text(data[i].price).siblings().text(data[i].miaoshu);
				}
			}
		})
	}

	//tab切换
	$('.fl4').click(function(){
		$('#getli').show();
		$('#getul').hide();
		$('.fl4').css('background','#125f06');
		$('#fl3').css('background','none');
	})

	$('#fl3').click(function(){
		$('#getul').show();
		$('#getli').hide();
		$('#fl3').css('background','#125f06');
		$('.fl4').css('background','none')
	})

	$('.getli').mouseover(function(){
		$('.img_1').css('box-shadow','-10px 10px 0px #125f06');
	})
	$('.getli').mouseout(function(){
		$('.img_1').css('box-shadow','none');
	})

})