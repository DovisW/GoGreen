
$(function(){
		$.ajax({
				url:'/about',
				type:'post',
				data:{},
				success:function(data){
					var img=$('#list_content img');
					var a=$('#list_content a');
					var p=$('#list_content p');
					for (var i = 0; i <data.length; i++) {
						$(img[i]).src='images/about_img/'+data[i].pic+'.png'
						a.text(data[i].title);
						p.text(data[i].message);
					}
				},
				error:function(err){
					return console.log(err);
				}
			});
		$.ajax({
				url:'/shopDetail',
				type:'post',
				data:{},
				success:function(data){
					var img=$('.afterColor img');
					var p1=$('.p1');
					var p2=$('.p2');
					for (var i = 0; i<data.length; i++) {
						// img[i].src='images/about_img/'+data[i].pic+'.jpg'
						$(img[i]).attr('src','images/about_img/'+data[i].pic+'.jpg')
						p1.text(data[i].description);
						p2.text(data[i].much);
					}
				},
				error:function(err){
					return console.log(err);
				}
			});
		$('#emailPut').on('blur',function(){
			var email=$('#emailPut').val()
			if (email) {
				$.ajax({
					url:'/shopDetail',
					type:'get',
					data:{email:email},
					success:function(data){

					},
					error:function(err){
					return console.log(err);
				}
				});
			}
		});
	var prev=$('#prev');
	 var next=$('#next');
	 var aLi=$('#peopleDes .li')
	 var index=2;
		 function animate(offset) {
			var peopleDes=$('#peopleDes');
	               	var newLeft = parseInt(peopleDes.css('left')) + offset;
	                	peopleDes.stop(true).animate({'left':newLeft + 'px'},'slow')
	            }
            function remove(){
            	     for (var i = 0; i <aLi.length; i++) {
            		$(aLi[i]).removeClass('center');
            		$(aLi[i]).on('click',function(){
            			this.addClass('center');
            		})
            	}
            }

            prev.on('click',function(){
            		animate(-198);
            		remove();
            		index+=1;
            		console.log(index);
            		$(aLi[index]).addClass('center').append('<h3>John Francis Doe</h3><h4>BARTENDER</h4><ul><li><i class=" icon-facebook"></i></li><li><a href="#"><i class=" icon-twitter"></i></a></li><li><a href="#"><i class="icon-google-plus"></i></a></li></ul>');
            		$(aLi[index]).siblings().find('h3').remove();
            		$(aLi[index]).siblings().find('h4').remove();
            		$(aLi[index]).siblings().find('ul').remove();
 			          

            });
            
            next.on('click',function(){
            		remove();
            		index-=1;
            		$(aLi[index]).siblings().find('h3').remove();
            		$(aLi[index]).siblings().find('h4').remove();
            		$(aLi[index]).siblings().find('ul').remove();
            		$(aLi[index]).addClass('center').append('<h3>John Francis Doe</h3><h4>BARTENDER</h4><ul><li><i class=" icon-facebook"></i></li><li><a href="#"><i class=" icon-twitter"></i></a></li><li><a href="#"><i class="icon-google-plus"></i></a></li></ul>');

           	 }); 
 		
 		$.ajax({
				url:'/pl',
				type:'post',
				data:{},
				success:function(data){
				// console.log(data);
					var box = $('.ReviewsBox');
					// console.log(box);
					var xing = data[0].xing;
					$(box).find('h4').text(data[0].name);
					$(box).find('p').text(data[0].neirong);
					var classi = $('.xing1>i')
					// console.log(classi)
						for (var i=0;i<xing;i++){
							$(classi[i]).removeClass('icon-star-empty fl').addClass('icon-star fl');
							// $(classii[i]).removeClass('icon-star-empty fl').addClass('icon-star fl');
						}
						
				}		
			});

 		var li = $('.right>li')
 		var xing;
 		for(var i=0;i<li.length;i++){
 			$(li[i]).on('click',function(){
 				$(this).children().removeClass('icon-star-empty fl').addClass('icon-star fl').parent().siblings().children().removeClass('icon-star fl').addClass('icon-star-empty fl');
 				 xing = $(this).attr('index');
 			});
 		}
 		

 		$('#inputSub').on('click',function(){
 			var inp = $('.left>input').val();
 			var inpu = $('.right>input').val();
 			var text = $('#text1').val();
 			$.ajax({
				url:'/sdtail',
				type:'get',
				data:{xing:xing,inp:inp,inpu:inpu,text:text},
				success:function(data){
					console.log(data);
					var box1 = $('.div1');
					$(box1).find('h4').text(data[0].name);
					$('.neirong').text(data[0].text);
					var xing1 =Number(data[0].xing);
					var font=$('div.xing2>i');
					// console.log(xing1);
					for(let a=0;a<xing1;a++){
						console.log(a);
						console.log(font[a]);
						$(font[a]).removeClass('icon-star-empty fl').addClass('icon-star fl');
						// $(xing2[i]).children().removeClass('icon-star-empty fl').addClass('icon-star fl').parent().siblings().children().removeClass('icon-star fl').addClass('icon-star-empty fl');
					}
				},
				error:function(err){
					return console.log(err);
				}		
			});
 		})

});

