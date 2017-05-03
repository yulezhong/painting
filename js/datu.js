$(function(){

	var $con = $(".con");
	var $img = $(".con img");
	var $ul = $(".con ul");
	var $li = $(".con li");
	var bol = false;
	var index = 0;
	var timer = null;
	var timer2 = null;	
	 
	$img.eq(index).css("zIndex",1);
	$(".con ul li").eq(index).css("background","yellow");
	
	timer = setInterval(function(){show(1)},5000)
	
	function show(n){
		$img.css({"zIndex":0,"opacity":0,})
		var before = index;
		$img.eq(before).css("opacity",1);
			index+=n;
		if(index>=$img.length){index=0}
			if(index<0){index=$img.length-1}
			var op = 0;
		clearInterval(timer2);
	timer2 = setInterval(function(){
			op+=0.02;
			if(op>=1){
				clearInterval(timer2);
				bol = false;
			}
			$li.css("background","#666");
			$li.eq(index).css("background","yellow");
			$img.eq(index).css("zIndex",1)
			$img.eq(index).css("opacity",op);
		},50)
	 }

	 $(window).resize(function(){
		$ul.css("marginLeft",-$ul.width()/2);
	})

	 $con.on("mouseenter",function(){clearInterval(timer)})
	 $con.on("mouseleave",function(){timer = setInterval(function(){show(1)},5000)})

	 $li.on("click",function(){

	 	if(index==$(this).index()||bol){return}
	 		bol = true;
	 	index = $(this).index()-1;
	 		show(1)
	 })

	 var dix = 0;
	 var l = 0;
	 $con.on("touchstart",function(e){
	 		dix = e.touches[0].clientX;

	 		$(document).on("touchmove",function(e){
	 			var xx = e.touches[0].clientX;
	 			l = xx - dix;
	 		})
	 })

	$(document).on("touchend",function(){
		if(l>0)
		{
			clearInterval(timer)
			show(-1);
		}
		else
		{
			clearInterval(timer)
			show(1);
		}
	})

	 $(document).on('touchstart',function (e) {
		e.preventDefault();
	})

})










