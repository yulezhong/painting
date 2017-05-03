$(function(){


	var $div = $(".div2");
	var index = getIndex();
	var before = 0;
	var bol = false;



	$(window).scroll(function(){
		index =  getIndex();
	})

	function getIndex(){
		var sTop = $(window).scrollTop();
		var index = 0; 
		$div.each(function(i){
			if(sTop>=$(this).offset().top){
				index = i;
			}
		})
		return index;
	}


	$(window).mousewheel(function(e,down){
		if(bol){return};
		bol = true;
		if(down){
			before = index;
			index++;
			if(index>=$div.length){index = $div.length-1}
		}else{
			before = index;
			index--;
			if(index<=0){index=0}
		}
		moveFn(down);
	})


	function moveFn(down){
		
		var top = $div.eq(index).offset().top;
		var beforeT = $div.eq(before).offset().top;
		var sTop = $(window).scrollTop();
		var h = $(document).height() - $(window).height();



		if(index==beforeT&&beforeT==sTop){bol = false;return}
		if(sTop>beforeT&&!down){top=beforeT};

		
		$(window).sTopMove(top,function(){bol = false;})
	}
})