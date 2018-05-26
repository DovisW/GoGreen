
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
						img[i].src='images/about_img/'+data[i].pic+'.png'
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
 
});

