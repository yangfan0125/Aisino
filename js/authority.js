//添加
    $(".addrow").click(function(){
        
    })  
//修改
    $(".modify").click(function(){
        oneData("authority-wrap","modifyModal","oneDataModal")
        var aa= $(".role-wrap tbody tr").find('input[type="checkbox"]:checked');
        function getcontent(id){
            return $(aa).parent().siblings().eq(id).html();
        }
        $("#modifyModal #rolename").val(getcontent(0))
        $("#modifyModal #remark").val(getcontent(3))
    })
//删除
    $(".delete").click(function(){
        var checkbox=$(".authority-wrap tbody tr").find('input[type="checkbox"]');        
        var checkboxType = checkbox.is(':checked');
        if(checkboxType){
            $(".delete").attr("data-target","#deleteModal")
        }else{
            $(".delete").attr("data-target","#oneDataModal")
        }   
        var checked=$(".authority-wrap tbody tr").find('input[type="checkbox"]:checked')
        var checkedNum = checked.length;
        $(".deletenum").html(checkedNum)
        $(".delrow").click(function(){      
            var selec=$(".authority-wrap").bootstrapTable("getSelections")
            var arr=[];
            for(var i=0;i<selec.length;i++){                    
                arr.push(selec[i].num)   
            }
            $(".authority-wrap").bootstrapTable('remove', {field: 'num', values: arr})
        })
    })           
//table参数设置
    $(".authority-wrap").bootstrapTable({
        url: 'json/authority.json',
       columns: [
        {
            field:'checked',
            checkbox : true,
            class:'authoritycheckbox'
        },
        {   
            field: 'project',
            title: '所属工程'       
        },
        {
            field: 'cnName',
            title: '权限名称'
        },
        {
            field: 'engName',
            title: '英文名称'
        },
        {
            field: 'fatherName',
            title: '父权限名称'
        },
        {
            field: 'fatherEngName',
            title: '父英文名称'
        },
        {
            field: 'operation',
            title: '实现操作'
        },
        {
            field: 'operationobject',
            title: '操作对象'
        },
        {
            field: 'path',
            title: '展示路径'
        },
        {
            field: 'aim',
            title: '目标区域'
        },
        {
            field: 'folder',
            title: '是否展开'
        },
        {
            field: 'enable',
            title: '是否启用'
        },
        {
            field: 'show',
            title: '是否显示'
        },
        {
            field: 'menu',
            title: '是否菜单'
        },
        {
            field: 'button',
            title: '按钮名称'
        },
        {
            field: 'means',
            title: '前端方法'
        },
        {
            field: 'num',
            title: '排序号'
        }
        ],
        classes:"display table table-condensed dataTable table-bordered",
        undefinedText:'',
        search:true,
        searchAlign:"right",
        showExport:true,
        exportDataType: "basic",
        showRefresh:true,
        toolbar:"#toolbar",
        pagination:true,
        pageSize:6,
        pageList:[6, 10, 20, 100]
    })


