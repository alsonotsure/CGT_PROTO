Ext.define('CGT_PROTO.view.createEvent.CreateEventForm',{
    extend: 'Ext.form.Panel',
    requires:
    [
//      'CGT_PROTO.view.createEvent.EventIDFieldSet' 
//        'CGT_PROTO.view.createEvent.EventIDTextField' 
//        'CGT_PROTO.view.createEvent.EventDetailsFieldSet'

		'CGT_PROTO.view.createEvent.EventFormDetailsPanel',
		'CGT_PROTO.view.createEvent.EventFormReferenceInfoPanel'
    ],
//    id: 'createEventForm',
    xtype: 'createEventForm',
//    html: 'Create Event Form',
//    flex: 1,
//    border: true,
//    height: '100%',
//	border: 1,
//	style: {
//	    borderColor: 'red',
//	    borderStyle: 'solid'
//	},
    
//    margin: '5 5 5 5',
//    scrollable: true,
	layout:
	{
//		type: 'hbox',
		type: 'vbox',
		align: 'stretch'
	},
    trackResetOnLoad: true,
    buttons:
    [
	{
	    text: 'Save',
//	    formBind: true, //only enabled once the form is valid
//	    disabled: true,
	    handler: function() {
//	    	this.up('form').saveEvent(this.up('form').getForm())
	    	this.up('form').saveEvent()
	    	
//	        var form = this.up('form').getForm();
////	        var form = this.up('form')
//	        if (form.isValid()) {
//            	console.log('form valid...');
//            	
//            	var mode = "edit";
//	        	var record = form.getRecord();
//            	if ( record === null || record === undefined )
//            	{
//            		mode = "create";
//            		record = new CGT_PROTO.model.EventModel({});
//            	}
//	        	//Update Record, Check to see if in edit or create mode.
//	        	//If we're creating a new event, need to pass a record to updateRecord.
////	        	form.updateRecord();
////	        	this.up('form').updateRecord();
//	        	this.up('form').updateRecord(record);
//	        	
////	        	var record = form.getRecord();
//	        	
////	        	var associations = record.getAssociatedData();
////		          for (var rolename in associations) {
////		            name = rolename;
////		            field = this.down('[name='+name+']');
////		            if (field && field.isFormField) {
////		            	field.setValue(record[name]().getData().items);
////		            }
////		        }
//	        	
////	        	record.commit();
//	        	
//	        	
//        		var associations = record.associations; //associations is supposedly deprecated, but is used extensively in ExtJs source code for model.
//        		
//                for (var rolename in associations) {
//                	var role = associations[rolename];
//                	var item = role.getAssociatedItem(record);
//                	if ( item !== null && item !== undefined )
//                	{
//                	  item.commitChanges();
//                	}
//                }
//	        	
//                //TODO Do I need to commit a newly added record?
//	        	record.commit();
//                //Do Post here??
//	        	
//	        	
////	            form.submit({
////	                success: function(form, action) {
////	                   Ext.Msg.alert('Success', action.result.msg);
//		   	        	if ( mode === 'edit' )
//			        	{
//				        	this.up('window').closeMe = true; //Close without confirmation
//				        	this.up('window').close();
//			        	}
//			        	else if ( mode === 'create' )
//			        	{
//			        		//Go to home page
//			        		//TODO Make this cleaner
//			        		var mainContainer = CGT_PROTO.getApplication().getMainView().items.items[1];
//			        		mainContainer.getLayout().setActiveItem('eventGrid');
//			        		
//			        		//Get reference to grid and record to store
//			        		var eventsGrid = mainContainer.items.items[0];
//			        		var eventsStore = eventsGrid.getStore();
//			        		eventsStore.add(record);
//			        		
//			        		this.up('form').reset();
//			        	}
//	                   
////	                },
////	                failure: function(form, action) {
////	                    Ext.Msg.alert('Failed', action.result.msg);
////	                }
////                });
//	        }
//	        else
//	        {
//	        	console.log('form invalid...')
//	        }
	    }
	}
    ],
    items:
    [
//      {
////        xtype: 'eventIDFieldSet'
////          xtype: 'eventIDTextField'
//    	  xtype: 'eventDetailsFieldSet'
//      }
{
	 xtype: 'tabpanel',
//	 layout: 'fit',
	 height: '100%',
//	 flex: 1,
//		border: 1,
//		style: {
//		    borderColor: 'red',
//		    borderStyle: 'solid'
//		},
//		  scrollable: true,
	 items:
	 [
       {
    	   xtype: 'eventFormDetailsPanel'
       },
       {
    	   xtype: 'eventFormReferenceInfoPanel'
       }
	 ]
}

    ],
    loadRecord: function(record) {
//        var i, len, associations = record.hasMany.items, name, field;
//    	var i, len, associations = record.getPrototype().schema.associations.items, name, field;
//    	var i, len, associations = record.associations.items, name, field;
    	var i, len, associations = record.getAssociatedData(), name, field;
    	
        this.callParent(arguments);

        // loadRecord() won't include associated data, so let's do that.
//        if ( associations !== null && associations !== undefined )
//        {
//        for (i=0, len=associations.length; i<len; i++) {
//            name = associations[i].name;
//            field = this.down('[name='+name+']');
//            if (field && field.isFormField) {
//                field.setValue(record[name]());
//            }
//        }
        for (var rolename in associations) {
            name = rolename;
            field = this.down('[name='+name+']');
            if (field && field.isFormField) {
//                field.setValue(record[name]().getData());
            	var associatedEntity = record[name]();
//                field.setValue(associatedEntity);
//            	field.setValue(record[name]().getData().items);
            	field.setValue(associatedEntity.getData().items);
            }
        }
        
//        }
    },
    updateRecord: function(record){
    	this.callParent(arguments);
    	
    	record = record || this.getForm()._record;
    	
//    	var associations = record.getAssociatedData();
    	var associations = record.associations;
        for (var rolename in associations) {
            name = rolename;
            field = this.down('[name='+name+']');
            if (field && field.isFormField) {
//            	field.setValue(record[name]().getData().items);
            	record[name]().setData(field.getValue());
            }
        }
    },
    saveEvent: function()
    {
//        if (form.isValid()) {
    	
    	//Go through elements and mark invalid
    	for ( var x=0;x<this.items.items.length;x++ )
    	{
//    		this.items.items[x].getValidityStatus();
    		this.items.items[0].items.items[x].getValidityStatus();
    	}
    	var form = this.getForm()
    	  if (form.isValid()) {
        	console.log('form valid...');
        	
        	var mode = "edit";
        	var record = form.getRecord();
        	if ( record === null || record === undefined )
        	{
        		mode = "create";
        		record = new CGT_PROTO.model.EventModel({});
        	}
        	//Update Record, Check to see if in edit or create mode.
        	//If we're creating a new event, need to pass a record to updateRecord.
//        	form.updateRecord();
//        	this.up('form').updateRecord();
//        	this.up('form').updateRecord(record);
        	this.updateRecord(record);
        	
//        	var record = form.getRecord();
        	
//        	var associations = record.getAssociatedData();
//	          for (var rolename in associations) {
//	            name = rolename;
//	            field = this.down('[name='+name+']');
//	            if (field && field.isFormField) {
//	            	field.setValue(record[name]().getData().items);
//	            }
//	        }
        	
//        	record.commit();
        	
        	
    		var associations = record.associations; //associations is supposedly deprecated, but is used extensively in ExtJs source code for model.
    		
            for (var rolename in associations) {
            	var role = associations[rolename];
            	var item = role.getAssociatedItem(record);
            	if ( item !== null && item !== undefined )
            	{
            	  item.commitChanges();
            	}
            }
        	
            //TODO Do I need to commit a newly added record?
        	record.commit();
            //Do Post here??
        	
        	
        	
	    		//Go to home page
	    		//TODO Make this cleaner
	    		var mainContainer = CGT_PROTO.getApplication().getMainView().items.items[1];
	    		mainContainer.getLayout().setActiveItem('eventGrid');
	    		
	    		//Get reference to grid and record to store
	    		var eventsGrid = mainContainer.items.items[0];
//            form.submit({
//                success: function(form, action) {
//                   Ext.Msg.alert('Success', action.result.msg);
	   	        	if ( mode === 'edit' )
		        	{
	   	        		var rowwidget = eventsGrid.findPlugin('rowwidget');
//			            var widget = rowwidget.getWidget(eventsGrid.getView(), record);
////			            var widget = rowwidget.getWidget(null, record);
//			            
//////			        	widget.items.items[0].items.items[0].update(record);
////			            widget.items.items[0].items.items[0].update(record.activePeriod());
////			        	widget.items.items[0].items.items[1].update(record);
////			        	widget.items.items[0].items.items[2].update(record);
//	   	        		
//			            widget.items.items[0].updateTemplate(record)
//			            
//			            if ( !rowwidget.recordsExpanded[record.internalId] )
//			            {
//			            	widget.destroy();
//			            }
//			            
////			            widget.destroy();
////			            eventsGrid.findPlugin('rowwidget').toggleRow(0,record);
//			            
////			            eventsGrid.getView().refresh();
	   	        		
//	   	        		rowwidget.updateWidget(record);
			            
	   	        		
	   	        		
	   	        		
	   	        		
	   	        		//this works when row is expanded
	   	        		var widget = rowwidget.addWidget(eventsGrid.getView(),record)
	   	        		if (widget !== null && widget !== undefined )
	   	        	    {
	   	        		  widget.items.items[0].updateTemplate(record);
	   	        	    }
	   	        		
//			            widget.updateLayout();
			            
//			            eventsGrid.findPlugin('rowwidget').addWidget(eventsGrid.getView(), record);
			            
////		                var rowNode = rowwidget.view.getNode(0);  //rowIdx
//		                var rowNode = rowwidget.view.getNode(record);
//		                var normalRow = Ext.fly(rowNode);
////		                var normalRow = Ext.fly(record);
//		                var wasCollapsed = normalRow.hasCls(rowwidget.rowCollapsedCls);
//			            
//		                if ( !wasCollapsed )
//		                {
//			        	  widget.items.items[0].items.items[0].update(record);
//			        	  widget.items.items[0].items.items[1].update(record);
//			        	  widget.items.items[0].items.items[2].update(record);
//		                }
		                
//			            var widget = rowwidget.addWidget(eventsGrid.getView(), record);
	   	        		
//	   	        		eventsGrid.getView().refresh();
	   	        		
//			        	widget.items.items[0].items.items[0].setData(record);
			            
			        	this.up('window').closeMe = true; //Close without confirmation
			        	this.up('window').close();
		        	}
		        	else if ( mode === 'create' )
		        	{
//		        		//Go to home page
//		        		//TODO Make this cleaner
//		        		var mainContainer = CGT_PROTO.getApplication().getMainView().items.items[1];
//		        		mainContainer.getLayout().setActiveItem('eventGrid');
//		        		
//		        		//Get reference to grid and record to store
//		        		var eventsGrid = mainContainer.items.items[0];
		        		var eventsStore = eventsGrid.getStore();
		        		eventsStore.add(record);
			            
//		        		this.up('form').reset();
//		        		form.reset();
		        		form.reset();
		        	}
                   
//                },
//                failure: function(form, action) {
//                    Ext.Msg.alert('Failed', action.result.msg);
//                }
//            });
        }
        else
        {
        	console.log('form invalid...')
        	
//        	//Go through elements and mark invalid
//        	for ( var x=0;x<this.items.items.length;x++ )
//        	{
//        		this.items.items[x].getValidityStatus();
//        	}
        	
        	var fields = form.getFields();
            var errors = [];

//            fields.each(function(field) {
//              Ext.Array.forEach(field.getErrors(), function(error) {
//                  errors.push({ name: field.getFieldLabel(), error: error });
//              });
//            });

//            this.setErrors(errors);
//            errors = Ext.Array.from(errors);
            
            var errorsMessage = ""
            var lineBreak = "";
            fields.each(function(field) {
                Ext.Array.forEach(field.getErrors(), function(error) {
//                    errors.push({ name: field.getFieldLabel(), error: error });
                    errorsMessage += lineBreak + field.getFieldLabel() + " " + error;
                    lineBreak = "<br>"
                });
              });

            
			Ext.Msg.show({
			    title:'Form errors',
			    message: 'This form has errors.',
			    buttons: Ext.Msg.OK,
			    icon: Ext.Msg.ERROR,
			    message: errorsMessage
			});

            
            
            
            
        }

    },

//    /*
//     * Listen for validity change on the entire form and update the combined error icon
//     */
//    listeners: {
//        validitychange: 'updateErrorState',
////        errorchange: 'updateErrorState'
//    },
//    updateErrorState: function()
//    {
//    	console.log("in updateErrorState...");
//    }
    
    
    
//    tipTpl: [
//             '<ul class="' + Ext.baseCSSPrefix + 'list-plain">',
//             '<tpl for=".">',
//             '<li><span class="field-name">{name}</span>: ',
//             '<span class="error">{error}</span>',
//             '</li>',
//             '</tpl>',
//             '</ul>'
//         ],    
//    
//    setErrors: function(errors) {
//        var me = this,
//            tpl = me.tipTpl,
//            tip = me.tip;
////            tip = me.tip,
////            position = Ext.theme.name === 'Graphite' ? 'left-top' : 'top';
//
//        if (!me.tipTpl.isTemplate) {
//            tpl = me.tipTpl = new Ext.XTemplate(tpl);
//        }
//
//        if (!tip) {
//            tip = me.tip = Ext.widget('tooltip', {
//                target: me.el,
//                title: 'Error Details:',
//                minWidth: 200,
//                autoHide: false,
////                anchor: position,
////                anchor: 'top',
//                anchor: 'bottom',
////                mouseOffset: [-11, -2],
////                closable: true,
//                constrainPosition: false,
//                cls: 'errors-tip'
//            });
//        }
//
//        errors = Ext.Array.from(errors);
//
//        // Update CSS class and tooltip content
//        if (errors.length) {
//            me.addCls(me.invalidCls);
//            me.removeCls(me.validCls);
//            me.update(me.invalidText);
//            tip.setDisabled(false);
//            tip.update(tpl.apply(errors));
//            tip.show();
//        }
//        else {
//            me.addCls(me.validCls);
//            me.removeCls(me.invalidCls);
//            me.update(me.validText);
//            tip.setDisabled(true);
//            tip.hide();
//        }
//    },
    
//    updateErrorState: function(cmp, state) {
//        var me = this,
//            errorCmp = me.lookupReference('formErrorState'),
//            view, form, fields, errors;
//
//        view = me.getView();
//        form = view.getForm();
//
//        // If we are called from the form's validitychange event, the state will be false if invalid.
//        // If we are called from a field's errorchange event, the state will be the error message.
//        if (state === false || (typeof state === 'string')) {
//            fields = form.getFields();
//            errors = [];
//
//            fields.each(function(field) {
//                Ext.Array.forEach(field.getErrors(), function(error) {
//                    errors.push({ name: field.getFieldLabel(), error: error });
//                });
//            });
//
//            errorCmp.setErrors(errors);
//            me.hasBeenDirty = true;
//        }
//        else if (state === true) {
//            errorCmp.setErrors();
//        }
//    }
    
});