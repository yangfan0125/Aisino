//sidebar 数据加载
	$.get("json/menu.json",success,"json");
	function success(data){
		var result1="<li class='sub-menu'><a href='javascript:;'><i class='iconfont icon-ruiyanshicai07'></i><span>"+data[0].name+"</span><span class='dcjq-icon'></span></a><ul class='sub' style='display:block;'>";
		result1+="<li dataId='1'><a class='sub-nav' href='##'>"+data[0].array[0].name+"</a></li><li dataId='2'><a class='sub-nav' href='##'>"+data[0].array[1].name+"</a></li><li dataId='3'><a class='sub-nav' href='##'>"+data[0].array[2].name+"</a></li></ul></li>"
		result1+="<li class='sub-menu'><a href='javascript:;'><i class='iconfont icon-ruiyanshicai07'></i><span>"+data[1].name+"</span><span class='dcjq-icon'></span></a><ul class='sub'>";
		result1+="<li dataId='4'><a class='sub-nav' href='##'>"+data[1].array[0].name+"</a></li><li dataId='5'><a class='sub-nav' href='##'>"+data[1].array[1].name+"</a></li><li dataId='6'><a class='sub-nav' href='##'>"+data[1].array[2].name+"</a></li></ul></li>"
		result1+="<li class='sub-menu'><a href='javascript:;'><i class='iconfont icon-ruiyanshicai07'></i><span>"+data[1].name+"</span><span class='dcjq-icon'></span></a><ul class='sub'>";
		result1+="<li dataId='7'><a class='sub-nav' href='##'>"+data[1].array[0].name+"</a></li><li dataId='8'><a class='sub-nav' href='##'>"+data[1].array[1].name+"</a></li><li dataId='9'><a class='sub-nav' href='##'>"+data[1].array[2].name+"</a></li></ul></li>"
		result1+="<li class='sub-menu'><a href='javascript:;'><i class='iconfont icon-ruiyanshicai07'></i><span>"+data[1].name+"</span><span class='dcjq-icon'></span></a><ul class='sub'>";
		result1+="<li dataId='10'><a class='sub-nav' href='##'>"+data[1].array[0].name+"</a></li><li dataId='11'><a class='sub-nav' href='##'>"+data[1].array[1].name+"</a></li><li dataId='12'><a class='sub-nav' href='##'>"+data[1].array[2].name+"</a></li></ul></li>"
		$(".sidebar-menu").html(result1)
	}
 //sidebar  选项卡
	$(".sidebar-menu").on("click", ".sub li", function() {
		$(this).addClass('sub-active').siblings().removeClass('sub-active');
		var index=$(this).attr("dataId")-1;
		$(".main-block").eq(index).addClass("show").siblings().removeClass("show");
	});	

	$(".sidebar-menu").on("click",".sub-menu a",function(){
		
		var subItem=$(this).next();
		subItem.slideToggle("normal",function(){
		})
		$(this).parent().siblings().children(".sub").css("display","none")
	})
	

	



