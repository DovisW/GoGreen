$(function(){
	//数据库
	window.onload = function(){
		$.ajax({
			url:'/shop',
			type:'post',
			data:{},
			success:function(data){
				for(var i=0;i<data.length;i++){
					var li = $('.getli');
					// console.log(data[i].id)
					$(li[i]).attr('name_id',data[i].id);
					$(li[i]).children('a').children('img').attr('src','../images/'+data[i].img);
					// $(li[i]).children('div').eq(0).text(data[i].price).siblings();\
					$(li[i]).children('a').children('div').find('p:first').text(data[i].price).siblings().text(data[i].miaoshu);
				}
			}
		})
	}
	$('.getli').on('click',function(){
		var num=$(this).attr('name_id');
		console.log(num);
		$('.getli a').attr('href','/shopDetail?num='+num);
	})
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
		$.ajax({
			url:'/shop_tab',
			type:'get',
			data:{},
			success:function(data){
				console.log(data)
				for(var i=0;i<data.length;i++){
					var li = $('.get_data');
					
					$(li[i]).find('.imgs').attr('src','../images/'+data[i].img);
					
					$(li[i]).find('.content_1').text(data[i].price)
					$(li[i]).find('.content_2').text(data[i].miaoshu)
				}
			}
		});
	})

})
	//Map
	var map = new AMap.Map('map',{
		    zoom: 10,//缩放比例
		    // zooms:[3,20],//指定缩放的范围
		    expandZoomRange:true,//允许缩放
		    center: [106.55,29.57],//new AMap.LngLat(116.39,39.9)  经纬度
		    pitch:50,//设置俯仰角度   0度~83度
		    viewMode:'3D',//设置3D地图
		    mapStyle: 'amap://styles/macaron'//样式URL   amap://styles/模版样式的英文名
		});

	// 添加地图控件
		AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
		    function(){
		        map.addControl(new AMap.ToolBar());

		        map.addControl(new AMap.Scale());

		        map.addControl(new AMap.OverView({isOpen:true}));
		});

	// 设置点标注
		var marker = new AMap.Marker({
			position:[106.55,29.57],//设置marker的经纬度
			map: map,//map应用于哪个地图
			title:'美丽的重庆',
			draggable:true
		    });