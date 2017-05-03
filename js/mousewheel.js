$.fn.extend({
	mousewheel:function(cb) {
		if (navigator.userAgent.indexOf("Firefox")>-1) {
			$(this).get(0).addEventListener("DOMMouseScroll",fn);
		}else{			
			$(this).get(0).onmousewheel = fn;
		}
		function fn(e) {
			var e = e || window.event;
			var down = true;
			if (e.detail) {				
				down=e.detail>0;
			}else {
				down=e.wheelDelta<0;
			}		
			cb.apply($(this).get(0),[e,down])
			if (e.preventDefault) {
				e.preventDefault();
			}
			return false;
		}
	}

	
})

$.fn.extend({
	sTopMove:function(end,fn) {
		var start = $(window).scrollTop();
		var change = end-start;
		var t = 0;
		var endT = 30;
		var timer = setInterval(function () {
			t++;
			if (t>=endT) {
				clearInterval(timer);
				fn && fn();
			}
			var sTop = easeOut(t,start,change,endT);

			$(window).scrollTop(sTop);
		},30)
		function easeOut(t,b,c,d){
			return c*((t=t/d-1)*t*t + 1) + b;
		}
	}
})


