
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
					console.log(p1);
					var p2=$('.p2');
					for (var i = 0; i<data.length; i++) {
						img[i].src='images/about_img/'+data[i].pic+'.jpg'
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
		})
});

