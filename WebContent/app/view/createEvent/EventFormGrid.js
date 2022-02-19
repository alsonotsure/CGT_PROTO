Ext.define('CGT_PROTO.view.createEvent.EventFormGrid',
{
	extend: 'Ext.grid.Panel',
	xtype: 'eventFormGrid',
//			width: 700,
			scrollable: true,
			style:
			{
				overflow: 'visible !important'
			},
			viewConfig:
			{
			  deferEmptyText: false
			},
			dataModel: null,
			dataFields: null,
			emptyText: "No items found.",
			initComponent: function()
			{
			  
//			  this.callParent();	
				
//		      if ( this.dataColumns !== null && this.dataColumns !== undefined )
//		      {
//		    	  this.getColumns().push(this.dataColumns);
//		    	  this.columns.push(this.dataColumns);
//		    	  this.columns.splice(0,0,this.dataColumns[0]);
		    	  
//		    	  this.columns = this.dataColumns;
		    	  
//		    	  var actionColumns = 
//		    	  {
//		            xtype:'actioncolumn',
//		            width:75,
//		            items: 
//		            [
//		             {
//		                iconCls: 'x-fa fa-edit',
//		                tooltip: 'Edit',
//		                handler: function(view, rowIndex, colIndex, item, event, record, row) 
//		                {
//		                	var rowediting = view.ownerGrid.findPlugin('rowediting');
//		                	rowediting.startEdit(record);
//		                }
//		             },
//		             {
//		             	xtype: 'spacer'
//		             },
//		             {
//		             	iconCls: 'x-fa fa-trash-alt',
//		                 tooltip: 'Delete',
//		                 handler: function(view, rowIndex, colIndex, item, event, record, row)
//		                 {
//		                	 view.ownerGrid.getStore().remove(record);
//		                 }
//		             }
//		           ],
//		           editRenderer: function(value)
//		           {
//		        	   return "";
//		           }
//		        };
//		    	  
//		    	this.columns.push(actionColumns);
//		      }
				
//		      this.columns;
			  this.callParent();
			  
		      this.findPlugin('rowediting').on('canceledit', this.cancelEditFunction);
		      
		      this.findPlugin('rowediting').on('canceledit', this.editFunction);
			},
			cancelEditFunction: function(rowEditing, context, eOpts) {
		      if ( context.record.phantom )
		      {
                // Canceling editing of a locally added, unsaved record: remove it
	            context.store.remove(context.record);
		      }
	        },
            editFunction: function( rowEditing, context, eOpts )
            {
            	var store = context.grid.getStore();
            	store.sort([{property: 'start', direction: 'ASC'}, {property: 'end', direction: 'ASC'}]);
            },
//			constructor: function(config)
//			{
//			  
////			  this.callParent();	
//				
//		      if ( config.dataColumns !== null && config.dataColumns !== undefined )
//		      {
////		    	  this.getColumns().push(this.dataColumns);
////		    	  this.columns.push(this.dataColumns);
//		    	  this.columns.splice(0,0,config.dataColumns[0]);
//		      }
//				
//		      this.columns;
//			  this.callParent([config]);
//			},
		    tbar: 
		    [
		     {
		        text: 'Add item',
		        handler: function() {
		        	    var grid = this.up('grid');
		                rec = Ext.create(grid.dataModel,{});

		                if ( grid.store.getData().length > 0 )
		                {
		                  grid.store.insert(0, rec);
		                }
		                else
		                {
		            		var store = Ext.create('Ext.data.Store',
		            				{
		            					fields: grid.dataFields,
		            					data: [rec]
		            				});		            				
		            				grid.setStore(store);
		                }
		                grid.findPlugin('rowediting').startEdit(rec, 0);
		            }
		     }
		    ],
//			columns: 
//			[
////			  {
////				text: 'Active Period',
////				dataIndex: 'activePeriod',
////				flex: 1,
////				sortable: false,
////				renderer: function( value, metaData, record, rowIndex, colIndex, store, view )
////				{
////	        		var retVal = "";
////	        		console.log(record);
////	        		if (value !== null)
////        			{
////        		        retVal = record.formatTimePeriods([record]);
////        			}
////	        		return retVal;
////	        	},
////	        	editor: {
////					xtype: 'eventActivePeriod',
////				}
////			  },
//		        {
//		            xtype:'actioncolumn',
//		            width:75,
//		            items: 
//		            [
//		             {
//		                iconCls: 'x-fa fa-edit',
//		                tooltip: 'Edit',
//		                handler: function(view, rowIndex, colIndex, item, event, record, row) 
//		                {
//		                	var rowediting = view.ownerGrid.findPlugin('rowediting');
//		                	rowediting.startEdit(record);
//		                }
//		             },
//		             {
//		             	xtype: 'spacer'
//		             },
//		             {
//		             	iconCls: 'x-fa fa-trash-alt',
//		                 tooltip: 'Delete',
//		                 handler: function(view, rowIndex, colIndex, item, event, record, row)
//		                 {
//		                	 view.ownerGrid.getStore().remove(record);
//		                 }
//		             }
//		           ],
//		           editRenderer: function(value)
//		           {
//		        	   return "";
//		           }
//		        }
//			],
		    plugins:
		        [
		            {
		                ptype: 'rowediting',
		                triggerEvent: 'bogus', //Set to bogus so that editing isn't triggered by anything
//		                cancelEditFunction: function(rowEditing,context,eOpts)
//		                {
//	                        // Canceling editing of a locally added, unsaved record: remove it
//	                        context.store.remove(context.record);                	
//		                },
//		                listeners:{
////		                    'canceledit': function(rowEditing, context, eOpts) {
////		                        // Canceling editing of a locally added, unsaved record: remove it
//////		                        if (context.record.phantom && context.record.data.end === null && context.record.data.start === null ) {
//////		                        if (context.record.phantom && context.record.data.end === null && context.record.data.start === null && context.record.data.qualifier === null) {
////		                            context.store.remove(context.record);
//////		                        }
////		                    },
////		                	'canceledit': this.cancelEditFunction,
//		                    'edit': function( rowEditing, context, eOpts )
//		                    {
//		                    	var store = context.grid.getStore();
//		                    	store.sort([{property: 'start', direction: 'ASC'}, {property: 'end', direction: 'ASC'}]);
//		                    }
//		                }
		            }
		        ],
		   isDirty: function()
		   {
			   var store = this.getStore();
			   return store.getNewRecords().length > 0 || store.getUpdatedRecords().length > 0 || store.getRemovedRecords().length > 0;

		   }
});
