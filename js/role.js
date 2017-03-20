//添加
	var rolename=$("#rolename").val();
	var remark=$("#remark").val();
	//判空
	$("#rolename").blur(function(){
		var $parent = $(this).parent();
        $parent.find(".formtips").remove();
		if($(this).val()==""){
			var errorMsg = '请输入角色名!';
            $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
		}
	}).keyup(function(){
           $(this).triggerHandler("blur");
        }).focus(function(){
             $(this).triggerHandler("blur");
        })
	$(".addrole").click(function(){
		$(".role-wrap").bootstrapTable('prepend',roledata)
	})
	var creationtime=getNowFormatDate()
    //获取当前时间
    function getNowFormatDate() {
	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	            + " " + date.getHours() + seperator2 + date.getMinutes()
	            + seperator2 + date.getSeconds();
	    return currentdate;
	} 
	var roledata=[ {
        "name": rolename,
        "remark": remark,
        "creationDate":creationtime,
        "id":3
    }]
//修改
 $(".modify").click(function(){
    oneData("role-wrap","modifyModal","oneDataModal")
	var aa= $(".role-wrap tbody tr").find('input[type="checkbox"]:checked');
	function getcontent(id){
		return $(aa).parent().siblings().eq(id).html();
	}
	$("#modifyModal #rolename").val(getcontent(0))
	$("#modifyModal #remark").val(getcontent(3))


	 })
//删除
	$(".delete").click(function(){
	var checkbox=$(".role-wrap tbody tr").find('input[type="checkbox"]');   	 
	 var checkboxType = checkbox.is(':checked');
	 if(checkboxType){
	 	$(".delete").attr("data-target","#deleteModal")
	 }else{
	 	$(".delete").attr("data-target","#deleteModal2")
	 } 	 
	 var checked=$(".role-wrap tbody tr").find('input[type="checkbox"]:checked')
	 var checkboxNum = checked.length;
	 	 $(".deletenum").html(checkboxNum)
	 	 $(".delrow").click(function(){   	 	 	
	 	 	var selec=$(".role-wrap").bootstrapTable("getSelections")
	 	 	var arr=[];
	 	 	for(var i=0;i<selec.length;i++){    	 	 		
	 	 		arr.push(selec[i].id)	
	 	 	}
	 	 	$(".role-wrap").bootstrapTable('remove', {field: 'id', values: arr})
	 	 })
	})   
//table参数设置
    $(".role-wrap").bootstrapTable({
    	url: 'json/role.json',
    	columns: [
    	{
    		field:'checked',
    		checkbox : true,
    		class:'rolecheckbox'

    	},
    	{   
            field: 'name',
            title: '角色名称'       
        }, {
            field: 'creationDate',
            title: '创建日期'
        }, {
            field: 'modificationDate',
            title: '修改日期'
        },
         {
            field: 'remark',
            title: '备注'
        },
        {  
    	    field: 'Number',  
    	    title: 'Number',  
    	    formatter: function (value, row, index) {  
    	    return index+1;  
    	    }  
    	}
        ],
        classes:"display table table-condensed dataTable table-bordered",
        undefinedText:'',
        search:true,
        searchAlign:"right",
        showExport:true,
        exportDataType: "basic",
        showRefresh:true,
        toolbar:"#toolbar"
    })


