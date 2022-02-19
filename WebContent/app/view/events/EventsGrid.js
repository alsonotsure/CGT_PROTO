Ext.define('CGT_PROTO.view.events.EventsGrid',
{
//    extend: 'Ext.grid.Panel',
    extend: 'Ext.ux.LiveSearchGridPanel',
    requires:
    [
      'CGT_PROTO.view.events.EventDetails',
//      'Ext.ux.PreviewPlugin'
      'CGT_PROTO.view.createEvent.CreateEventForm',
//      'CGT_PROTO.store.CountryStore'
    ],
//    reference: 'eventsGrid',
//    requires:
//    [
//        'CGT_PROTO.store.EventsStore',
//        'CGT_PROTO.model.EventModel'
//    ],
    defaultStatusText: '',
    xtype: 'eventsGrid',
	viewConfig:
	{
	  deferEmptyText: false
	},
	emptyText: "No Events found.",
    multiColumnSort: true,
    
//    viewModel: true,
//    baseCls: this.cls,
//    baseCls: 'x-toolbar',
//    cls: 'x-toolbar',
    initComponent: function()
    {
//    	
////    	this.tbar = ["My Search", {xtype: 'label', text: "My Search Label"}]
//    	this.dockedItems = [{
//    	    xtype: 'toolbar',
//    	    dock: 'top',
//    	    items: [
//"My Search", {xtype: 'label', text: "My Search Label"}
//    	    ],
////    	    afterRender: function() {
//////    	        this.callParent();
////    	 
////    	        this.el.addCls('x-toolbar');
////    	    },
////    	    cls: 'grid-paging-toolbar'
//    	    
//    	},
////    	{
////    		xtype: 'pagingtoolbar',
////    		dock: 'bottom'
////    	}]
//    	];
    	
    	
//		this.gotoCurrent = function()
//		{
////            var pos = this.matches[this.currentIndex];
////            
////            this.getNavigationModel().setPosition(pos.record, pos.column);
////            this.getSelectionModel().select(pos.record);
//			
//			this.callParent();
////			this.callSuper();
//			
////			gotoCurrentOrig();
//			this.textField.focus();
//		};
    	
		this.callParent();
//		
////    	this.tbar = ["My Search"]
////		this.dockedItems = ["My Search"];
////		
////		var me = this;
////		
////		me.tbar.cls = 'x-toolbar';
//		
////        Ext.theme.Material.setColors({
////            'darkMode': true
////        });
		
//		var gotoCurrentOrig = this.gotoCurrent;
//		var me = this;
//		this.gotoCurrent = function()
//		{
////            var pos = this.matches[this.currentIndex];
////            
////            this.getNavigationModel().setPosition(pos.record, pos.column);
////            this.getSelectionModel().select(pos.record);
//			
////			this.callParent();
////			me.callSuper();
////			me.callParent();
//			
////			me.gotoCurrent();
//			
////			gotoCurrentOrig();
//			
//			Ext.ux.LiveSearchGridPanel.prototype.gotoCurrent.call(this);
//			this.textField.focus();
//		};
		
//		var headerMenu = this.headerCt.getMenu();
//		var removeSorter = headerMenu.add([{
//	        xtype: 'menuitem',
//	        text: 'Remove from sort'
//	    }]);
    },
//    dockedItems: [{xtype: 'label', text: "My search"}],
//    bbar: {
//		xtype: 'pagingtoolbar'
//    },
    columns:
    [
        {
            text: 'Event ID',
            dataIndex: 'eventId',
            sortable: true,
            filter:
            {
            	type: 'headerString'
            }
        },
        {
            text: 'Title',
            dataIndex: 'title',
            sortable: true,
            filter: 'string',
            flex: 1,
            cellWrap: true,
//            width: '100%',
//            items:
//            [
//                {
//                    xtype: 'textfield',
//                    fieldStyle: "",
//                    reference: 'nameFilterField',
//                    flex: 1,
//                    margin: 2,
//                    enableKeyEvents: true,
//                    listeners: {
//                        keyup: 'onNameFilterKeyup',
//                        buffer: 500
//                    }
//                }
//            ]
        },
//        {
//            xtype: 'widgetcolumn',
//            text: 'Edit',
//            widget:
//            {
//                //bind: '{record.progress}',
//                xtype: 'button',
//                //iconCls: 'widget-grid-user',
//                //handler: 'onButtonWidgetClick'
//                text: 'Edit'
//            }
//        },
//        {
//            xtype: 'widgetcolumn',
//            text: 'Delete',
//            widget:
//            {
//                //bind: '{record.progress}',
//                xtype: 'button',
//                //iconCls: 'widget-grid-user',
//                //handler: 'onButtonWidgetClick'
//                text: 'Delete'
//            }
//        }
        {
        	text: 'Country',
        	dataIndex: 'country',
        	sortable: true,
        	filter: 
        	{
        		type: 'string'
        	},
        	renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
            {
//        		console.log('country column value = ' + value)
//        		var countryString = "";
//        		if ( value !== null && value !== "" )
//        		{
//	        		var countryStore = Ext.data.StoreManager.lookup('countryStore');
//	//        		var countryStore = Ext.create('CGT_PROTO.store.CountryStore');
//	        		var foundRecord = countryStore.findRecord('countryCode', value)
//	//        		var countryString = "";
//	        		if ( foundRecord !== null && foundRecord)
//	        		{
//	        			countryString = foundRecord.get('countryName') + " (" + foundRecord.get('countryCode') + ")";
//	        		}
//	        		else
//	        	    {
//	        			countryString = value;
//	        	    }
//        		}
//        		return countryString;
        		
        		var countryStore = Ext.data.StoreManager.lookup('countryStore');
        		var countryString = countryStore.formatCountryString(value);
        		return countryString;
            }
        },
        {
        	text: 'Active Period',
        	dataIndex: 'activePeriod',
        	flex: 1,
        	renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        		var retVal = "";
        		console.log(record);
//        		if (value !== null)
                if (record.activePeriod() !== null)
        			{
//        	    // style the cell using the dataIndex of the column
//        	    var headerCt = this.getHeaderContainer(),
//        	        column = headerCt.getHeaderAtIndex(colIndex);
//
//        	    metaData.tdCls = 'app-' + column.dataIndex;
//        	    return value;
        		
                 record.activePeriod().sort([{property: 'start', direction: 'ASC'}, {property: 'end', direction: 'ASC'}]);
                	
//        		console.log('value = ' + value)
//        		console.log(record);
        		console.log(record.activePeriod())
//        		console.log(metaData);
//        		return record.activePeriod().getModel().prototype.formatTimePeriods(value);
        		        retVal = record.activePeriod().getModel().prototype.formatTimePeriods(record.activePeriod().getData().items);
//        		retVal = record.activePeriod().getData().items;
//        		retVal = record.activePeriod().getData();
        			}
//        		return record.getActivePeriod();
//        		return value;
//        		return store.getAt(rowIndex).activePeriod().formatTimePeriods(value);
//        		        		console.log(record);
//        		console.log(record.get('activePeriod')[0]);
//        		return record.get('activePeriod')[0].formatTimePeriods(value);
        		
        		return retVal;
        	}
        },
        {
        	text: 'Guidance',
        	flex: 1,
        	columns:
        	[
        		{
        		  text: 'Optimal',
        		  dataIndex: 'optimal'
        		},
        		{
        		  text: 'Minimum',
        		  dataIndex: 'minimum'
        		}
        	]
        },
        {
        	text: 'Hot List',
        	dataIndex: 'onHotList'
        },
        {
            xtype:'actioncolumn',
            width:75,
//            defaults:
//            {
////              padding: '0 15 0 15',
//            	margin: '0 50 0 0'
//            },
            items: 
            [
             {
//                iconCls: 'x-fa fa-cog',
                iconCls: 'x-fa fa-edit',
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex) 
                {
                    var rec = grid.getStore().getAt(rowIndex);
                    
//		            var widget = grid.ownerGrid.findPlugin('rowwidget').getWidget(grid, rec);
                    
                    var createEventForm = Ext.create({
                    	xtype: 'createEventForm'
                    })
                    
                    var editWindow = Ext.create({
                    	xtype: 'window',
                    	title: 'Edit Event',
                    	modal: true,
//                    	scrollable: true,
//                    	viewModel: true,
//                    	viewModel: grid,
//                    	viewModel: {
//                    		data: grid
//                    	},
                    	
                    	height: Ext.getBody().getViewSize().height * .95,
                    	width: Ext.getBody().getViewSize().width * .95,
                    	layout:
                    	{
                    		type: 'fit'
                    	},
                    	items:
                    	[
//	                    	{
//	                    		xtype: 'createEventForm',
////	                    		viewModel: true
//	                    	}
							createEventForm
	                    ],
//	                    onRender: function()
//	                    {
//	                    	console.log('window onRender...');
//	                    },
	                    listeners:
	                    {
	                    	'beforeclose' : function(me, eOpts)
	                    	{
	                    		
	                    		
	                    		var editForm = me.down('form');	                    		
	                    		//Check if dirty, if so, confirm discard changes
//	                    		if ( rec.dirty )
//	                    		var shouldClose = true;
	                    		if ( me.closeMe ||       //User has already confirmed close (either pressing yes or no to save changes question)
	                    			 !editForm.isDirty() ) //or form is not dirty (no changes were made)
	                    		{
	                    			me.closeMe = false; //reset so next time message box will show
	                    			return true;
	                    		}
	                    		
//	                    		var editForm = this.down('form');
//	                    		if ( editForm.isDirty() )
	                    		else
	                    		{
	                    			
	                    			Ext.Msg.show({
	                    			    title:'Save Changes?',
	                    			    message: 'You are closing a window that has unsaved changes. Do you want to save changes?',
	                    			    buttons: Ext.Msg.YESNOCANCEL,
	                    			    icon: Ext.Msg.QUESTION,
	                    			    fn: function(btn) {
	                    			    	shouldClose = false;
	                    			        if (btn === 'yes') {
	                    			        	//Call save action
	                    			        	editForm.saveEvent();
//	                    			        	me.closeMe = true;
//	                    			        	me.close()
	                    			        	
	                    			        	//Update the rowwidget
//	                    			            grid.findPlugin('rowwidget').getWidget.update(rec);
//	                    			            grid.findPlugin('rowwidget').getWidget.update({record: rec});
//	                    			        	grid.findPlugin('rowwidget').getWidget.setData(rec);
	                    			        	
//	                    			        	 grid.findPlugin('rowwidget').getWidget(grid.getView(), rec).update(rec);
//	                    			        	widget.update(rec)
//	                    			        	widget.items.items[0].update(rec)
	                    			        	
//	                    			        	widget.items.items[0].items.items[2].update(rec);
	                    			        	
////		                    			        if ( editForm.isValid() )
////		                    			        if ( editForm.getForm().isValid() )
//		                    			        if ( !editForm.hasInvalidField() )
//		                    			        {
//		                    			        	shouldClose = true;
//		                    			        }
		                    			        
//		                    			        widget.update(rec)
//		                    			        widget.items.items[0].items.items[2].update(rec);
//		                    			        widget.items.items[0].items.items[2].update({'record': rec});
//		                    			        widget.items.items[0].update(rec);
//		                    			        widget.items.items[0].items.items[2].update();
		                    			        
//		                    			        widget.items.items[0].items.items[2].update(rec,false,null,widget.items.items[0].items.items[2]);
		                    			        
//		                    			        widget.updateLayout();
//	                    			        	shouldClose = true;
	                    			        } else if (btn === 'no') {
	            	                    		var associations = rec.associations; //associations is supposedly deprecated, but is used extensively in ExtJs source code for model.
	            	                    		
	            	                            for (var rolename in associations) {
	            	                            	var role = associations[rolename];
	            	                            	var item = role.getAssociatedItem(rec);
	            	                            	if ( item !== null && item !== undefined )
	            	                            	{
	            	                            	  item.rejectChanges();
	            	                            	}
	            	                            }
	            	                    		
	            	                    		grid.getStore().rejectChanges();
	            	                    		
	            	                    		shouldClose = true;
//	                    			        	me.closeMe = true;
//	                    			        	me.close()
//	                    			        } else {
//	                    			        	shouldClose = false;
	                    			        }
	                    			        
	                    			        if ( shouldClose )
//	                    			        if ( shouldClose && editForm.isValid() )
	                    			        {
	                    			        	me.closeMe = true; //Save user answer  
	                    			        	me.close();
	                    			        }
	                    			    }
	                    			});
	                    			
////	                        	var associations = rec.getAssociatedData(null,{'changes':true});
////	                    		var associations = rec.getAssociatedData();
//	                    		var associations = rec.associations; //associations is supposedly deprecated, but is used extensively in ExtJs source code for model.
////	                    		console.log(associations);
//	                    		
//	                            for (var rolename in associations) {
////	                            	console.log(rolename);
//	                            	var role = associations[rolename];
////	                            	console.log(role.store)
////	                            	console.log(role);
//	                            	var item = role.getAssociatedItem(rec);
//	                            	if ( item !== null && item !== undefined )
//	                            	{
//	                            	  item.rejectChanges();
//	                            	}
//	                            }
//	                    		
////	                    		rec.reject(true);
//	                    		grid.getStore().rejectChanges();
////	                    		rec.activePeriod().getModel().prototype.reject();
		                    		return false; //Always cancel if we get this far
	                    		}
	                    		
//	                    		return shouldClose;
//	                    		return false; //Always cancel if we get this far
	                    	}
	                    }
	                    
                    });
                    
//                    if ( rec.activePeriod().getData().items.length > 0 )
//                    {
//                    	rec.activePeriod = rec.activePeriod().getData().items;
//                    }
                    
                    //Listen for browser resize so window can grow/shrink along with browser
                    Ext.on('resize',function(){
                    	editWindow.setHeight(Ext.getBody().getViewSize().height * .95);
                    	editWindow.setWidth(Ext.getBody().getViewSize().width * .95);
                    });
                    
                    createEventForm.loadRecord(rec)
                    editWindow.show();
                }
//                margin: '0 50 0 0'
            },
            {
            	xtype: 'spacer',
            	//width: '5'
            },
            {
//                icon: 'extjs-build/examples/restful/images/delete.png',
            	iconCls: 'x-fa fa-trash-alt',
                tooltip: 'Delete',
                handler: function(view, rowIndex, colIndex, item, event, record, row) {
//                    var rec = grid.getStore().getAt(rowIndex);
//                    alert("Terminate " + rec.get('firstname'));
        			Ext.Msg.show({
        			    title:'Confirm Delete?',
        			    message: 'You have chosen to delete an event.  Do you wish to continue?',
        			    buttons: Ext.Msg.YESNO,
        			    icon: Ext.Msg.QUESTION,
        			    fn: function(btn) {
        			    	shouldClose = false;
        			        if (btn === 'yes') {
           	                  record.drop();
           	                  record.commit();
        			        }
        			    }
        			});
                }
//                padding: '0 15 0 15'
            }
          ]
        }        
    ],
    plugins:
    [
        {
            ptype: 'rowwidget',
            widget:
            {
//                xtype: 'panel',
//                html: '{record.eventId}'
                xtype: 'eventDetails',
                bind:  //Need this to bind subcomponents
//                {
//                    html: null
//                }
//                {}
                true
//                bind: 
//                {
//                	data: '{record}'
//                }
            },
            onWidgetAttach: function(plugin, bodyComponent, record)
            {
              console.log('onWidgetAttach...')
              var gridView = plugin.grid.getView()
              var widget = plugin.getWidget(gridView, record);
              widget.items.items[0].updateTemplate(record)
            }
        },
//        {
//            ptype: 'preview',
//            expanded: true,
//            bodyField: 'title'
//        }
        {
        	ptype: 'gridfilters'
        }
    ],
//    store: {
//      xtype: 'eventsStore'
//    },
    store: Ext.create('CGT_PROTO.store.EventsStore'),
    //store: Ext.create({xtype:'eventsStore'}),
    listeners:
    {
//        'resize':
//        {
//            delay: 1,
//            fn: function()
//            {
//                console.log("grid resized...");
//            }
//        },
        'columnresize': function(ct, column, width, eOpts)
        {
            console.log('column resize...')
            var grid = this;
            var plugin = grid.findPlugin('rowwidget');
            if (plugin && plugin.recordsExpanded) {
                for (var internalId in plugin.recordsExpanded) {
                    var record = grid.store.getByInternalId(internalId);
                    if (!Ext.isEmpty(record)) {
//                        plugin.getWidget(grid.getView(), record).setWidth('100%');
//                        plugin.getWidget(grid.getView(), record).updateLayout();
                    	var widget = plugin.getWidget(grid.getView(),record);
                    	widget.setWidth('100%');
                    	widget.updateLayout();
                    }
                }
//	            grid.getView().refresh();
            }
        },
//        afterRender: function() {
//            this.callParent();
//     
//            this.tbar.el.addCls('x-toolbar');
//        },
    	sortchange: function(ct, column, direction, eOpts)
    	{
    		var grid = this;
//    		var store = grid.getStore();
//    		var onHotListSorter = Ext.create('Ext.util.Sorter',{property: "onHotList", direction: "desc", root: "data"})
////    		store.sorters.add({property: "onHotList", direction: "desc", root: "data"});
//    		store.sorters.add(onHotListSorter);
    	},
//        afterrender: function(me, eOpts) {                                        
////            var menu = c.headerCt.getMenu();
////            menu.on('beforeshow', function() {
//////               var currentDataIndex = menu.activeHeader.dataIndex; 
////                var sortState = menu.activeHeader.sortState;
////                var removeFromSort = menu.down('#removeSortItem');
////                if ( (removeFromSort !== null && removeFromSort !== undefined) && (sortState === null || sortState === undefined) ) {
//////                    menuItem.show();
////                	removeFromSort.setDisabled(true);
//////                } else {
//////                    menuItem.hide();
////                }
////            });
//        	
//            var menu = me.headerCt.getMenu();
//        	var removeSortItem = {
//			 		itemId: 'removeSortItem',
//	                text: 'Remove from Sort',
////	                iconCls: me.menuSortAscCls,
////	                handler: me.onRemoveSortClick,
//	                handler: function(){
//	    	            activeHeader = menu.activeHeader;
//	    	 
//	    	        //TODO Need to remove sorter from store
//	    	        var dataIndex = activeHeader.dataIndex;
//	    	    	if( me.getStore().getSorters().get(dataIndex) ){
//	    	    		var sorter = me.getStore().getSorters().get(dataIndex);
//	    	    		me.getStore().getSorters().remove(sorter);
//	    	    	}
//	    	        
//	    	        activeHeader.setSortState(null);
//	                },
////	                scope: me,
////	                disabled: true
//				 };
//        	
//
//            var menuItem = menu.add(removeSortItem);
//        		
//            var sortState = menu.activeHeader.sortState;
//            menu.on('beforeshow', function() {
//            	if ( sortState === null ){
//            		removeSortItem.setDisabled(true);
//            	}
//            });
//        		
//        	
//        }
    	
    },
//    afterRender: function() {
//        this.callParent();
//        this.getDockedItems()[0].el.addCls('x-toolbar');
////        this.tbar.el.addCls('x-toolbar');
//    }
//    privates:
//    {
//    gotoCurrent: function() {
//        var pos = this.matches[this.currentIndex];
//
//        this.getNavigationModel().setPosition(pos.record, pos.column);
////        this.getSelectionModel().select(pos.record);
//    }
//    }
    onTextFieldChange: function()
    {
    	
    	this.callParent();
    	
    	this.textField.focus();
    }
});