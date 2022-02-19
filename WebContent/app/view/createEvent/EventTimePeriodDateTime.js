Ext.define( 'CGT_PROTO.view.createEvent.EventTimePeriodDateTime', {
	 		extend: 'Ext.container.Container',
//	 		xtype: 'field',
//	 		xtype: 'fieldset',
	 		xtype: 'eventTimePeriodDateTime',
	 		mixins:
	 		[
	 		 'Ext.form.field.Field'
	 		],
	 		requires:
 			[
 			 'CGT_PROTO.view.createEvent.CGT_PROTOTimefield'
 			],
	 		layout:
	 			{
	 				type: 'hbox'
	 			},
//	 			name: 'start',
//	 			mixins:
//	 				[
//	 				 'Ext.form.field.Field'
//	 				],
	 			
//	 	    initComponent: function()
//	 	    {
//	 	    	this.callParent();
//	 	    	
//	 	    	this.items.items[0].on('select')
//	 	    },
	 		items:
	 			[
		 			{
		 			    xtype: 'datefield',
//		 			    name: 'startDate',
//		 			    name: 'date',
//		 			    fieldLabel: 'Start Date',
		 			    fieldLabel: 'Date',
		 			    itemID: 'date',
		 			    allowBlank: false,
		 			    width: 150,
//		 			    getErrors: function()
//		 			    {
//		 			    	console.log("in datefield getErrors...")
////		 			    	this.callParent();
//		 			    	
//		 			    }
		 			},
		 			{
		 				xtype: 'tbspacer',
		 				width: 5
		 			},
		 			{
		 		        xtype: 'cgt_protoTimefield',
//		 		        name: 'startTime',
//		 		       name: 'time',
		 		        itemID: 'time',
//		 		        fieldLabel: 'Start Time'
		 		       fieldLabel: 'Time',
		 		       width: 150
		 			}

	 			],
	 			setValue: function(value)
	 			{
	 				console.log('in eventTimePeriodDateTime setValue...')
	 				
	 				if ( value !== null && value !== undefined )
	 				{
	 					console.log(value);
//	 				var utcDateTime = value.getUTCDateTime(value);
//	 				var utcDateTime = Ext.Date.utcToLocal(Ext.Date.parse(value))
//	 				var utcDateTime = Ext.Date.utcToLocal(value);
		 			var utcDateTime = Ext.Date.utcToLocal(new Date(value));
	 				this.items.items[0].setValue(utcDateTime) //start date
//					this.items.items[x].items.items[0].items.items[0].items.items[0].items.items[0].originalValue = this.items.items[x].items.items[0].items.items[0].items.items[0].items.items[0].getValue() //start date
					
					this.items.items[2].setValue(utcDateTime) //start time 
//					this.items.items[x].items.items[0].items.items[0].items.items[0].items.items[2].originalValue = this.items.items[x].items.items[0].items.items[0].items.items[0].items.items[2].getValue() //start date
	 				}
	 				
	 			},
	 			getValue: function()
	 			{
	 				
	 				console.log('in eventTimePeriodDateTime getValue...')
//	 				retVal = "";
	 				retVal = null;
//					//Check dirty
//					if ( activePeriodContainer.isDirty() )
//					{
//					console.log('Save active period...' + activePeriodContainer.isDirty())
					
					//check form validity
//					if ( activePeriodContainer.isValid() ){
//					console.log('form validity = ' + activePeriodContainer.isValid())
					
//					var startDate = Ext.Date.format(activePeriodContainer.items.items[0].items.items[0].items.items[0].getValue(), Ext.Date.patterns.ISO8601Short);
//					var startTime = Ext.Date.format(activePeriodContainer.items.items[0].items.items[0].items.items[2].getValue(), 'H:i:s');
					
	 				if ( ! this.items.items[0].isDisabled() || ! this.items.items[2].isDisabled() )
	 			    {
					  var date = Ext.Date.format(this.items.items[0].getValue(), Ext.Date.patterns.ISO8601Short);
					  var time = Ext.Date.format(this.items.items[2].getValue(), 'H:i:s');
	 			    }
//					var endDate = Ext.Date.format(activePeriodContainer.items.items[0].items.items[1].items.items[0].getValue(), Ext.Date.patterns.ISO8601Short);
//					var endTime = Ext.Date.format(activePeriodContainer.items.items[0].items.items[1].items.items[2].getValue(), 'H:i:s');
				
					
//					var activePeriod = Ext.create('CGT_PROTO.model.TimePeriodModel',
//							{
//							  start: startDate + 'T' + startTime + 'Z',
//							  end: endDate + 'T' + endTime + 'Z'
//							});
					
//					savedActivePeriod.items.items[0].setText(activePeriod.formatTimePeriods([activePeriod]));
//					
//					activePeriodContainer.items.items[0].items.items[0].items.items[0].originalValue = activePeriodContainer.items.items[0].items.items[0].items.items[0].getValue() //start date
//					activePeriodContainer.items.items[0].items.items[0].items.items[2].originalValue = activePeriodContainer.items.items[0].items.items[0].items.items[2].getValue() //end date
//					
//					activePeriodContainer.items.items[0].items.items[1].items.items[0].originalValue = activePeriodContainer.items.items[0].items.items[1].items.items[0].getValue() //end date
//					activePeriodContainer.items.items[0].items.items[1].items.items[2].originalValue = activePeriodContainer.items.items[0].items.items[1].items.items[2].getValue() //end date
					
//					activePeriodContainer.setHidden(true);
//					savedActivePeriod.setHidden(false);
//					}
//					else
//					{
//						//show error message
//					}
//				}
	 				
	 				
//					if ( ! date.isEmpty() && ! time.isEmpty() )
					if (date !== "" && date !== "" )
					{
						retVal = date + 'T' + time + 'Z';
					}
//	 				return date + 'T' + time + 'Z';
					
					return retVal;
	 			}
//	 			initComponent: function()
//	 			{
//	 				
//	 			  this.callParent();
//	 			  
//		 			{
//		 			    xtype: 'datefield',
////		 			    name: 'startDate',
//		 			    name: 'date',
////		 			    fieldLabel: 'Start Date',
//		 			    allowBlank: false
//		 			},
//		 			{
//		 				xtype: 'tbspacer',
//		 				width: 5
//		 			},
//		 			{
//		 		        xtype: 'cgt_protoTimefield',
////		 		        name: 'startTime',
//		 		       name: 'time',
//		 		        fieldLabel: 'Start Time'
//		 			}
//	 				  
//	 			}
	 	});