Ext.define('CGT_PROTO.view.createEvent.ReferenceInformationEditor', {
	extend: 'Ext.form.FieldContainer',
	requires:
	[
	  'Ext.ux.IFrame',
	  'CGT_PROTO.view.createEvent.EventFormGridEditor'
	],
	layout: 
	{
//	  type: 'hbox',
		  type: 'vbox',
	  align: 'stretch'
	},
//	border: 1,
//	style: {
//	    borderColor: 'blue',
//	    borderStyle: 'solid'
//	},
//	width: '100%',
//	border: true,
	xtype: 'referenceInformationEditor',
	initComponent: function()
	{
		this.callParent();
		
		var iframe = Ext.create({
		  		  xtype: 'uxiframe',
//		  		  src: 'https://docs.sencha.com/extjs/7.2.0',
//		  		  width: '70%'
		  		  height: '70%',
		  		  width: '100%'
		  	  });
		
		var eventFormGridEditor = Ext.create(
	      {
	          xtype: 'eventFormGridEditor',
//	          width: '30%',
	          height: '30%',
	          width: '100%',
	          layout:
	          {
	        	  type: 'fit'
	          },
	      	emptyText: 'No Reference Info.',
	      	addButtonText: 'Add Reference Info',
	      	dataModel: 'CGT_PROTO.model.ReferenceInformationModel',
	          dataFields:
	          [
	            'links' 
	          ],
	  	    name: 'links',
	  	    dataColumns:
	  	    [
	            {
	          	  xtype: 'widgetcolumn',
	          	  dataIndex: 'checked',
	          	  widget:
	          	  {
	                  xtype: 'radio',
	                  name: 'showLink',
	            	    bind: '{record.checked}',
	                  listeners:
	                  {
	                    'change': function(me,newValue,oldValue,eOpts)
	                    {
	                  	var viewModel = me.lookupViewModel();
	                  	var data = viewModel.getData();
	                  	var record = data.record
	                  	if ( newValue )
	                      {
	                  	  console.log(record.data.href);
	                  	  iframe.src = record.data.href;
	                  	  iframe.load(record.data.href)
//	                  	  iframe.setSrc(record.data.href);
//	                  	  iframe.set({src: record.data.href});
	                      }
	                    }
	                  }
	          	  },
	          	  width: 40,
	  	      },
	  	      {
	  	    	  text: 'Name',
	  	    	  dataIndex: 'linkName',
//	  	    	  editor: 'textfield',
	  	    	  editor:
	  	    	  {
	  	    		xtype: 'textfield',
	  	    		allowBlank: false
	  	    	  },
	  	    	  flex: 1
	  	      },
	  	      {
	  	    	  text: 'URL',
	  	    	  dataIndex: 'href',
//	  	    	  editor: 'textfield',
	  	    	  editor:
	  	    	  {
	  	    		xtype: 'textfield',
	  	    		vtype: 'url',
	  	    		allowBlank: false
	  	    	  },
	  	    	  flex: 1
	  	      },
	  	      {
	  	    	  text: 'Description',
	  	    	  dataIndex: 'description',
	  	    	  editor: 'textfield',
	  	    	  flex: 1
	  	      } 
	  	    ]
	        });
//		eventFormGridEditor.eventFormGrid.setHeight('10%')
//		eventFormGridEditor.eventFormGrid.setWidth('100%')
//		eventFormGridEditor.eventFormGrid.setScrollable(true)
		
		var store = eventFormGridEditor.eventFormGrid.getStore();
		
		store.on('remove', function(store, records, index, isMove, eOpts)
		{
		  if ( records[0].data.checked )
		  {
			  iframe.src = 'about:blank';
			  iframe.load(iframe.src);
		  }
		}, store);
		
		store.on('update', function(store, record, operation, modifiedFieldNames, details, eOpts)
		{
		  if ( record.data.checked && iframe.src !== record.data.href )
		  {
			  iframe.src = record.data.href;
			  iframe.load(iframe.src);
		  }
		}, store);
		
		this.add(eventFormGridEditor);
		this.add(iframe)
	},
	
//	name: 'links',
	items:
	[	 
//      {
//    	xtype: 'fieldset',
//    	title: "URL",
//    	width: '25%',
//    	items:
//        [
//	   	  {
//			  xtype: 'textfield',
//			  fieldLabel: 'Link Name'
//		  },
//		  {
//			  xtype: 'textfield',
//			  fieldLabel: "URL"
//		  },
//		  {
//			  xtype: 'textarea',
//			  fieldLabel: 'Description'
//		  }
//        ]
//      },
//      {
//        xtype: 'eventFormGridEditor',
//        width: '30%',
//    	emptyText: 'No Reference Info.',
//    	addButtonText: 'Add Reference Info',
//    	dataModel: 'CGT_PROTO.model.ReferenceInformationModel',
//        dataFields:
//        [
//          'links' 
//        ],
////	    columnName: 'Reference Information',
////	    columnDataIndex: 'links',
////	    columnDataIndex: 'href',
//	    name: 'links',
//	    dataColumns:
//	    [
//          {
//        	  xtype: 'widgetcolumn',
//        	  dataIndex: 'checked',
//        	  widget:
//        	  {
//                xtype: 'radio',
//                name: 'showLink',
//          	    bind: '{record.checked}',
//                listeners:
//                {
//                  'change': function(me,newValue,oldValue,eOpts)
//                  {
//                	var viewModel = me.lookupViewModel();
//                	var data = viewModel.getData();
//                	var record = data.record
//                	if ( newValue )
//                    {
//                	  console.log(record.data.href);
////                	  me.up('fieldContainer').item.items[1].src = record.data.href;
//                    }
//                  }
//                }
//        	  },
//        	  width: 40,
////          	  renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
////              {
////          		  this.up('widgetcolumn').getWidget()
////              }
//	      },
////          {
////    	    dataIndex: 'checked',
////    	    editor: 'radio'
////	      },
//	      {
//	    	  text: 'Name',
//	    	  dataIndex: 'linkName',
//	    	  editor: 'textfield'
//	      },
//	      {
//	    	  text: 'URL',
//	    	  dataIndex: 'href',
//	    	  editor: 'textfield'
//	      },
//	      {
//	    	  text: 'Description',
//	    	  dataIndex: 'description',
//	    	  editor: 'textfield'
//	      } 
//	    ]
//      },
//	  {
//		  xtype: 'uxiframe',
//		  src: 'https://docs.sencha.com/extjs/7.2.0',
//		  width: '70%'
////		  height: '100%',
////		  scrollable: true,
////	      width: 1500,
////	      height: 1500
////	  		border: 1,
////	  		style: {
////	  		    borderColor: 'blue',
////	  		    borderStyle: 'solid'
////	  		},
//	  }
//	  {
//		  xtype: 'panel',
//		  html: '<iframe src="https://docs.sencha.com/extjs/7.2.0" width="100% height="100%"></iframe>'
////		  height: '100%',
////		  scrollable: true
//	  }
//      {
//      xtype: 'container',
//      layout : 'fit',
////      height: '90%',
////      width: '87%',
//      width: '75%',
////      scrollable: true,
//      items : [{
//          xtype : "component",
//          autoEl : {
//              tag : "iframe",
//              src : "https://docs.sencha.com/extjs/7.2.0",
////              width: '70%',
////              height: '70%'
//          },
////          scrollable: true,
//        }]
//      }
	]
});