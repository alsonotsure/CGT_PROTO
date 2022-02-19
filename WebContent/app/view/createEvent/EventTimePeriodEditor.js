Ext.define('CGT_PROTO.view.createEvent.EventTimePeriodEditor', {
	extend: 'CGT_PROTO.view.createEvent.EventFormGridEditor',
	requires:
	[
	 //'CGT_PROTO.view.createEvent.EventTimePeriod'
	],
	xtype: 'eventTimePeriodEditor',
	emptyText: 'No Time Periods found.',
	addButtonText: 'Add Time Period',
	dataModel: 'CGT_PROTO.model.TimePeriodModel',
    dataFields: [],
//    dataColumns:
//    [
//	    {
//		  text: 'Active Period',
//		  dataIndex: 'activePeriod',
//		  flex: 1,
//		  sortable: false,
//		  renderer: function( value, metaData, record, rowIndex, colIndex, store, view )
//		  {
//		 	var retVal = "";
//			console.log(record);
//			if (value !== null)
//			{
//		        retVal = record.formatTimePeriods([record]);
//			}
//			return retVal;
//		  },
//		  editor: 
//		  {
//		    xtype: 'eventActivePeriod',
//		  }
//	    }
//    ]
	initComponent: function()
	{
//		this.callParent();
		var timePeriodColumn =
		  {
			text: 'Time Period',
			dataIndex: 'timePeriod',
			flex: 1,
			sortable: false,
			renderer: function( value, metaData, record, rowIndex, colIndex, store, view )
			{
        		var retVal = "";
        		console.log(record);
        		if (value !== null)
  			{
  		        retVal = record.formatTimePeriods([record]);
  			}
        		return retVal;
        	},
        	//editor: {
			//	xtype: 'eventTimePeriod',
			//}
		  };
		
		if ( this.columnName !== null && this.columnName !== undefined )
	    {
		  timePeriodColumn.text = this.columnName;
	    }	
		
		if ( this.columnDataIndex !== null && this.columnDataIndex !== undefined )
	    {
		  timePeriodColumn.dataIndex = this.columnDataIndex;
	    }
		
////		this.eventFormGrid.getColumns().splice(0,1,activePeriodColumn);
////		this.eventFormGrid.reconfigure();
//		
////		this.columns = [];
//		this.eventFormGrid.columns.push(activePeriodColumn);
		
//		var columns = this.eventFormGrid.getColumns();
//		columns.splice(0,0,activePeriodColumn);
//		this.eventFormGrid.reconfigure(columns);
		
		this.config.dataColumns = timePeriodColumn;
		
		this.callParent();
		
		this.eventFormGrid.findPlugin('rowediting').removeListener('canceledit', this.eventFormGrid.cancelEditFunction);
		
		this.eventFormGrid.findPlugin('rowediting').on('canceledit', function(rowEditing, context, eOpts) {
          if (context.record.phantom && context.record.data.end === null && context.record.data.start === null && context.record.data.qualifier === null) {
            context.store.remove(context.record);
          }
        });
		
        this.eventFormGrid.setWidth(700);
		
	}
})