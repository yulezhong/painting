$(function()
{

	var arr1 = ["../img/h-1.png","../img/h-3.png","../img/h-5.png"];
	var arr2 = ["../img/h-2.png","../img/h-4.png","../img/h-6.png"];
	var arr3 = ["../img/foot1.png","../img/foot2.png","../img/foot3.png","../img/foot4.png"];
	var arr4 = ["../img/f-1.png","../img/y-1.png","../img/in-1.png","../img/t-1.png"];
	
	$(".nav div").on("mouseenter",function(){$(".nav div ul").show();})
	$(".nav div ul").on("mouseleave",function(){$(this).hide();})

	$(".nav div").on("mouseenter",function(){$(".nav div ul").show();})
	$(".nav div ul").on("mouseleave",function(){$(this).hide();})

	$(".nav div").on("mouseenter",function(){$(".nav div ul").show();})
	$(".nav div ul").on("mouseleave",function(){$(this).hide();})
	
	$(".contont ul").on("mouseenter",function(){
		$(".contont ul img").eq($(this).index(".contont ul")).attr("src",arr2[$(this).index(".contont ul")]);
		$(".l_space").eq($(this).index(".contont ul")).css("background","yellow")
	})
	$(".contont ul").on("mouseleave",function(){
		$(".contont ul img").eq($(this).index(".contont ul")).attr("src",arr1[$(this).index(".contont ul")]);
		$(".l_space").css("background","")
	})

	$(".foot img").on("mouseenter",function(){
		$(this).attr("src",arr4[$(this).index(".foot img")])
	})

	$(".foot img").on("mouseleave",function(){
		$(this).attr("src",arr3[$(this).index(".foot img")])
	})
})