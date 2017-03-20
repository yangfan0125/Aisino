# Aisino
the framework for the Cloud platfom
# 该后台管理系统基于Bootstrap3设计开发，具有扁平化的设计风格。
# 主色：#4C9ED9  辅色：#f6f6f6 鼠标移入:#5bc0de
# 兼容性：
# 目录结构: css
		  js
		  images
		  fonts
		  index.html
		  login.html
	
# index.html 中分为3部分:header,sidebar,main content.
# sidebar （左侧目录栏）中的内容需调用接口，sidebar.js
# main content (主体内容)运用了<frame>标签，每个frame对应子页。

# 页面中数据的主要展现形式为table，使用了Bootstrap Table插件（http://bootstrap-table.wenzhixin.net.cn/zh-cn/）。
Bootstrap Table是基于 Bootstrap 的 jQuery 表格插件，通过简单的设置，就可以拥有强大的单选、多选、排序、分页，以及编辑、导出、过滤（扩展）等等的功能。
页面中需引入bootstrap-table.js,
	    bootstrap-table-zh-Ch.js(语言转化),
	    bootstrap-table-export.js（数据导出）,
	    tableExport.js（数据导出）。
table中的数据需调用接口，role.js


