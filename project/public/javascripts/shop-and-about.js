
$(function(){
		
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
            		$(aLi[index]).addClass('center').append('<h3>John Francis Doe</h3><h4>BARTENDER</h4><ul><li><i class=" icon-facebook"></i></li><li><a href="#"><i class=" icon-twitter"></i></a></li><li><a href="#"><i class="icon-google-plus"></i></a></li></ul>');
            		$(aLi[index]).siblings().find('h3').remove();
            		$(aLi[index]).siblings().find('h4').remove();
            		$(aLi[index]).siblings().find('ul').remove();
 			          

            });
            
            next.on('click',function(){
            		remove();
            		index-=1;
            		animate(198);
            		$(aLi[index]).siblings().find('h3').remove();
            		$(aLi[index]).siblings().find('h4').remove();
            		$(aLi[index]).siblings().find('ul').remove();
            		$(aLi[index]).addClass('center').append('<h3>John Francis Doe</h3><h4>BARTENDER</h4><ul><li><i class=" icon-facebook"></i></li><li><a href="#"><i class=" icon-twitter"></i></a></li><li><a href="#"><i class="icon-google-plus"></i></a></li></ul>');

           	 }); 
          var numbers;
          var newNum;
         $('#minus').on('click',function(){
         	numbers=$('#showText').val()
         	newNum=Number(numbers);
         	newNum-=1;
         	if (newNum<=0) {
         		$('#showText').val('0')
         	}else{
         		$('#showText').val(String(newNum))
         	}
         })
          $('#plus').on('click',function(){
         	numbers=$('#showText').val()
         	newNum=Number(numbers);
         	newNum+=1;
         	$('#showText').val(String(newNum));
		});
          		var id;
         		var imgs;
         		var price;
         		var miaoshu
         		$('.btnAdd').on('click',function(){
         			id=$('#shopCarData').val();
         			numbers=$('#showText').val();
         			$.ajax({
         				url:'/shopCar',
					type:'get',
					data:{id:id,numbers:numbers},
					success:function(data){
						imgs=data[0].img
						price=data[0].price
						miaoshu=data[0].miaoshu
						len=Number(numbers)
						for (var i = 0; i < len; i++) {
							$('#shopCarBar').append('<div class="show"><i class=" icon-remove" onclick="drop(this)"></i><div class="afterColor"><img alt="" src=""></div><p class="p1" style="color:#125F06;font-weight:bolder;"></p><p style="margin: 0 ;height: 24px; text-align: right;line-height: 24px; color: #125F06;" class="p2"></p></div>')
							$('#shopCarBar img').attr('src','images/'+imgs)
							$('#shopCarBar .p1').text(price)
							$('#shopCarBar .p2').text(miaoshu)
						}

					
					},
					error:function(err){
						return console.log(err);
					}
         			});
         		});
         		
         		
         		
         		


         	
 	
})
function drop(Obj){
         		
         		Obj.parentNode.parentNode.removeChild(Obj.parentNode)
         		
}

