 //判断是否只选中了一条数据
    function oneData(tableName,rightModal,falseModal){
         var checkedNum = $("."+tableName+" tbody tr").find('input[type="checkbox"]:checked').length;
         if(checkedNum==1){
            $(".modify").attr("data-target","#"+rightModal)
         }else{
            $(".modify").attr("data-target","#"+falseModal)
         }
    }