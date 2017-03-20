//table 参数配置
	$(".bill-wrap").bootstrapTable({
		url:'json/bill.json',
		columns:[[
		{
			field:'state',
			checkbox:true,
			class:"billcheckbox",
			valign:"middle",
			colspan: 1,
            rowspan: 2
		},
		{
            field: 'department',
            title: "开票部门",
            valign:"middle",
            align:"center",
            colspan: 1,
            rowspan: 2
        },
		{
			field:'should',
			title:'应开发票单据',
			colspan:2,
			rowspan:1
		},
		{
			field:'already',
			title:'已开发票单据',
			colspan:2,
			rowspan:1
		},
		{
			field:'checkednot',
			title:'已审核的不开票单据',
			colspan:2,
			rowspan:1
		},
		{
			field:'checkingnot',
			title:'待审核的不开票单据',
			colspan:2,
			rowspan:1
		}
		],
		[
		{
			field:'shouldnum',
			title:'份数'
		},
		{
			field:'shouldprice',
			title:'金额'
		},
		{
			field:'alreadynum',
			title:'份数'
		},
		{
			field:'alreadyprice',
			title:'金额'
		},
		{
			field:'checkednotnum',
			title:'份数'
		},
		{
			field:'checkednotprice',
			title:'金额'
		},
		{
			field:'checkingnotnum',
			title:'份数'
		},
		{
			field:'checkingnotprice',
			title:'金额'
		}
		]],
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