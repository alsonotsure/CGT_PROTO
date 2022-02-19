Ext.define('CGT_PROTO.view.createEvent.EventFormGridEditor', {
	extend: 'Ext.form.FieldContainer',
	requires:
	[
	 'CGT_PROTO.view.createEvent.EventFormGrid'
	],
	mixins:
	[
	 'Ext.form.field.Field'
	],
	xtype: 'eventFormGridEditor',
	dataFields: [],
	initComponent: function()
	{
		this.callParent();
		
		var me = this;
		
		var columns = [];
//		if ( me.dataColumns !== null && me.dataColumns !== undefined ){
//		  columns = me.dataColumns
//		}
		
		if ( this.config.dataColumns !== null && this.config.dataColumns !== undefined ){
//			  if ( typeof this.config.dataColumns === 'array')
			  if ( this.config.dataColumns.length > 0)
			  {
				columns = columns.concat(this.config.dataColumns);
//		        columns.concat(this.config.dataColumns);
			  }
			  else
			  {
			    columns.push(this.config.dataColumns);
			  }
	    }
		
        var actionColumn =
        {
	        xtype:'actioncolumn',
	        width:75,
	        items: 
	        [
	         {
	            iconCls: 'x-fa fa-edit',
	            tooltip: 'Edit',
	            handler: function(view, rowIndex, colIndex, item, event, record, row) 
	            {
	            	var rowediting = view.ownerGrid.findPlugin('rowediting');
	            	rowediting.startEdit(record);
	            }
	         },
	         {
	         	xtype: 'spacer'
	         },
	         {
	         	iconCls: 'x-fa fa-trash-alt',
	             tooltip: 'Delete',
	             handler: function(view, rowIndex, colIndex, item, event, record, row)
	             {
	            	 view.ownerGrid.getStore().remove(record);
	             }
	         }
	       ],
	       editRenderer: function(value)
	       {
	    	   return "";
	       }
	    };
		
        columns.push(actionColumn);
        
		this.eventFormGrid = Ext.create(
		{
			xtype: 'eventFormGrid',
//			dataColumns: me.dataColumns
			columns: columns
			
		});
		
		var eventFormGridStore = Ext.create('Ext.data.Store',
		{
			fields: this.dataFields,
			data: null
		});
				
		this.eventFormGrid.setStore(eventFormGridStore);
		
		if ( me.emptyText !== null && me.emptyText !== undefined ){
			me.eventFormGrid.setEmptyText(me.emptyText);
		}
		
		if ( me.addButtonText !== null && me.addButtonText !== undefined ){
			me.eventFormGrid.getDockedItems()[0].items.items[0].text = me.addButtonText;
		}	
		
		if ( me.dataModel !== null && me.dataModel !== undefined ){
			me.eventFormGrid.dataModel = me.dataModel;
		}
		
		if ( me.dataFields !== null && me.dataFields !== undefined ){
			me.eventFormGrid.dataFields = me.dataFields;
		}
		
//		if ( me.dataColumns !== null && me.dataColumns !== undefined ){
//			me.eventFormGrid.columns = [me.dataColumns];
//		}
		
		this.add(this.eventFormGrid);
	},
//	constructor: function(config)
//	{
//		this.callParent([config]);
//		
//		var me = this;
//		
//		this.eventFormGrid = Ext.create(
//		{
//			xtype: 'eventFormGrid',
//			dataColumns: me.dataColumns
//		});
//		
//		if ( me.emptyText !== null && me.emptyText !== undefined ){
//			me.eventFormGrid.setEmptyText(me.emptyText);
//		}
//		
//		if ( me.addButtonText !== null && me.addButtonText !== undefined ){
//			me.eventFormGrid.getDockedItems()[0].items.items[0].text = me.addButtonText;
//		}	
//		
//		if ( me.dataModel !== null && me.dataModel !== undefined ){
//			me.eventFormGrid.dataModel = me.dataModel;
//		}
//		
//		if ( me.dataFields !== null && me.dataFields !== undefined ){
//			me.eventFormGrid.dataFields = me.dataFields;
//		}
//		
////		if ( me.dataColumns !== null && me.dataColumns !== undefined ){
////			me.eventFormGrid.columns = [me.dataColumns];
////		}
//		
//		this.add(this.eventFormGrid);
//	},
	setValue: function(value)
	{
//		var eventFormGridStore = Ext.create('Ext.data.Store',
//		{
//			fields: this.dataFields,
//			data: value
//		});
//		
//		this.eventFormGrid.setStore(eventFormGridStore);
				
	  this.eventFormGrid.getStore().setData(value);
	},
	isDirty: function(){
      var isDirty = this.down('grid').isDirty();
      return isDirty;
	},
	getValue: function()
	{	
	  return this.eventFormGrid.getStore().getData();
	}
})