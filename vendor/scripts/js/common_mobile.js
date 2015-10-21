function commonViewList(settingObj)
{
	settingObj.pageSize = (settingObj.pageSize) ? settingObj.pageSize : 30;	
	$("#"+settingObj.grid_id).kendoMobileListView({
            dataSource: {
					  type: "json",
					  autoSync: (settingObj.dataSource_autoSync) ? settingObj.dataSource_autoSync : false,
					  serverPaging: true,
					  serverFiltering: true,
					  serverSorting: true,
					  pageSize: settingObj.pageSize,
					  page:	settingObj.page,
					  batch: settingObj.batch,
					  schema: {
						  data:	function(response){ 
							  //alert(response.toSource()); 
							  return response.data_result; 
						  },
						  total: 'total',
						  model: settingObj.model
					  },
					  error: function (e) {
						   //var json = jQuery.parseJSON(e.responseText);
						   commonMsgDialog(settingObj, e.xhr.responseText);
					  },
					  transport: {				  
						  read: {
							  type: "POST",
							  dataType: "json",								
							  url: settingObj.dest_url,
							  data : settingObj.search_data,
							  complete: function(e) {
								  var json = $.parseJSON(e.responseText);								
								  if(json.status == 'ok')
								  {
									 if(!settingObj.no_browse_url)
									 {
									 	processAjaxData(json);
									 }
									 gridAction(settingObj);
									 if(settingObj.dataSource_transport_read_complete)
									 {
										 settingObj.dataSource_transport_read_complete(json);
									 }
								  }
								  else
								  {
									 commonMsgDialog(settingObj, json.msg);
								  }
							  }
						  },
                          update: settingObj.dataSource_transport_update,
						  destroy: (settingObj.dataSource_transport_destroy) ? settingObj.dataSource_transport_destroy : {},
						  create: settingObj.dataSource_transport_create,
						  parameterMap: settingObj.dataSource_transport_parameterMap
					  },
					  filter: (settingObj.dataSource_filter) ? settingObj.dataSource_filter : null,
					  sort: (settingObj.dataSource_sort) ? settingObj.dataSource_sort : null
				  },
            template: settingObj.rowTemplate,
			dataBound: settingObj.dataBound,
			scrollable: settingObj.scrollable,
            pullToRefresh: false,
            endlessScroll: false
        });
}