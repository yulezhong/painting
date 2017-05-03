




window.onload =function(){

	var ppc = document.querySelector(".ppc");
	var aDiv = document.querySelectorAll(".ppc .div1");
	var aImg = document.querySelectorAll(".ppc .div1>img");
	var div = document.querySelectorAll(".ppc .div1>div");
	var show = document.querySelector(".show");
	var img = document.querySelector(".show img");
	
	function changeSize() {
		var winw = window.innerWidth;
		var winh = window.innerHeight;
		var w = img.offsetWidth/winw;
		var h = img.offsetHeight/winh;
		if(w>h){img.style.width = winw*0.8+"px";img.style.height = "auto";}
		else{img.style.height = winh*0.8+"px";img.style.width = "auto";}
	}
	
	function picshow(){			
		for(var i=0;i<div.length;i++)
		{
			div[i].index = i;
			div[i].onclick = function(){
				img.src = aImg[this.index].src;
				show.style.display = "block";
				changeSize() 				
			}
		}
	}
	
	show.onclick = function(){
		show.style.display = "none";
	}
	var arr =[];
	
	function move()
	{
			var winW = document.documentElement.clientWidth;
			var num = parseInt(winW/aDiv[0].offsetWidth);
			var s = (winW-num*aDiv[0].offsetWidth)/(num+1);
			arr = [];
			for(var i=0;i<aDiv.length;i++){

				if(i<num){
					aDiv[i].style.left = (aDiv[0].offsetWidth+s)*i+s+"px";
					aDiv[i].style.top = 0;
					arr[i] = aDiv[i].offsetHeight+s;
				}else{
					var min =minFn(arr);
					aDiv[i].style.left = s + min*(aDiv[0].offsetWidth+s)+"px";
					aDiv[i].style.top = arr[min]+"px";
					arr[min] += aDiv[i].offsetHeight+s;
				}
			}
		ppc.style.height = maxFn(arr)+"px";
	}

	move();
	picshow();
	
	window.onresize = function(){
		move();
		changeSize()		
	}

	function minFn(arr){
		var index = 0;
		var min = arr[0];
		for(var i=0;i<arr.length;i++){
			if(min>arr[i]){
				min = arr[i];
				index = i;
			}
		}
		return index;
	}
	
	function maxFn(arr){
		var index = 0;
		var min = arr[0];
		for(var i=0;i<arr.length;i++){
			if(min<arr[i]){
				min = arr[i];
			}
		}
		return min;
	}
}	