Ext.define('CGT_PROTO.view.events.EventSummary',{
    extend: 'Ext.panel.Panel',
    xtype: 'eventSummary',
    layout: 'vbox',
//    width: '100%',
//    width: '100',
    bind:
    {
    	title: '{record.eventId}'
    },
//    header:
//    {
//    	width: '100%',
////    	style: 
//////    	{
////    		
//////    	    'overflow': 'inherit',
//////            'word-wrap': 'normal',
//////            'white-space': 'normal',
//////            'text-overflow': 'initial'
////    		
////    		'white-space': 'normal'
//////    	},
////    	bind:
////    	{
////    	  title: '{record.eventId} - {record.title}'
////    	},
//    	cls: 'long-header',
//    	title: "hardcoded long title hardcoded long title hardcoded long title hardcoded long title hardcoded long title hardcoded long title hardcoded long title "
//    },
    items: 
    [
        {
            xtype: 'label',
            width: '100%',
            bind:
            {
                text: '{record.title}'
            }
        },
        {
            xtype: 'label',
            bind:
            {
            	data: '{record.activePeriod}'
//            	data: '{record}'
//            	data: '{record.activePeriod().getData().items}'
            },
//            viewModel:
//            {
//            	   formulas: {
//            	        findActivePeriods: {
//            	            bind: {
//            	            	data: '{record.activePeriod}'
//            	            },
//
//            	            get: function (activePeriod) {
//            	                if ( activePeriod === null) return true;
//            	                else return false;
//            	            }
//            	        }
//            	    }
//            },
            tpl: new Ext.XTemplate(
//        	   '<p>Active Period(s):</p>',
        	   '<tpl>',
        	       '<br>Active Period(s):<br>{[this.formatTimePeriods(values)]}',
//        	       '<br>',
//        	       'Country:',
        	   '</tpl>',
        	   {
        		   formatTimePeriods: function( activePeriod )
        		   {
        			   var retVal = "N/A";
        			   if ( activePeriod !== null && activePeriod.getData().items.length > 0 )
        			   {
        				   retVal = activePeriod.getModel().prototype.formatTimePeriods(activePeriod.getData().items);
        			   }
        			   return retVal;
        		   }
//        		   formatTimePeriods: function( record )
//        		   {
//        			   var retVal = "N/A";
////        			   if ( activePeriod && activePeriod.getData().items.length > 0 )
//        			   if ( record.activePeriod !== null )
//        			   {
//        				   retVal = record.activePeriod.getModel().prototype.formatTimePeriods(record.activePeriod.getData().items);
//        			   }
//        			   return retVal;
//        		   }
        	   }
            ),
            updateTemplate: function(record)
            {
          	  this.update(record.activePeriod());
            }
        },
        {
        	xtype: 'label',
            bind:
            {
//            	data: '{record.country}'
            	data: '{record}'
            },
            tpl: new Ext.XTemplate(
//             	   '<tpl>',
////             	       'Country:<br>{[this.formatCountry(value)]}',
//         	           'Country:<br>{this.formatCountry(country)}',
//             	   '</tpl>',
//	               '<p>',
//	//         	       'Country:<br>{[this.formatCountry(value)]}',
//	// 	               'Country:<br>{this.formatCountry(country)}',
//	 	               'Country:<br>{country}',
//	         	   '<p>',
            		
//            	   '<tpl>',
// 	               '<p>',
// 	          	//         	       'Country:<br>{[this.formatCountry(value)]}',
// 	          	// 	               'Country:<br>{this.formatCountry(country)}',
//// 	          	 	               'Country:<br>{country}',
// 	 	          	         	   'Country:<br>{[this.formatCountry(country)]}',
// 	          	   '<p>',
//            	   '</tpl>',
            		
//            	   '<p>',
//            	   'Country:<br>',
//            	   '</p>',
//             	   '<tpl>',
//
// 	          	//         	       'Country:<br>{[this.formatCountry(value)]}',
// 	          	// 	               'Country:<br>{this.formatCountry(country)}',
//// 	          	 	               'Country:<br>{country}',
// 	 	          	         	   '{[this.formatCountry(values.country)]}',
//            	   '</tpl>',
            		
             	   '<tpl>',

 	          	//         	       'Country:<br>{[this.formatCountry(value)]}',
 	          	// 	               'Country:<br>{this.formatCountry(country)}',
// 	          	 	               'Country:<br>{country}',
 	 	          	         	   '<br>Country:<br>{[this.formatCountry(values.country)]}',
//    	         	   			   '<br>Country:<br>{[this.formatCountry(values.countryCode)]}',
            	   '</tpl>',
             	   {
            		   formatCountry: function( country )
            		   {
//            			   var retVal = "N/A";
//            			   if ( country !== null && country !== undefined && country !== "" )
//            			   {
//            				   retVal = country;
//            			   }
//            			   return retVal;
            			   
//                   		var countryString = "N/A";
//                		if ( country !== null && country !== "" )
//                		{
//        	        		var countryStore = Ext.data.StoreManager.lookup('countryStore');
//        	        		var foundRecord = countryStore.findRecord('countryCode', country)
//        	        		if ( foundRecord !== null && foundRecord)
//        	        		{
//        	        			countryString = foundRecord.get('countryName') + " (" + country + ")";
//        	        		}
//        	        		else
//        	        	    {
//        	        			countryString = country;
//        	        	    }
//                		}
//                		return countryString;
            			   
       	        		var countryStore = Ext.data.StoreManager.lookup('countryStore');   
                   		var countryString = countryStore.formatCountryString(country);
                   		if ( countryString === "" )
                   	    {
                   			countryString = "N/A";
                   	    }
                		return countryString;
            		   }   
             	   }
             	),
                updateTemplate: function(record)
                {
              	  this.update(record);
                }
        },
        
        {
        	xtype: 'label',
            bind:
            {
//            	data: '{record.country}'
            	data: '{record}'
            },
            tpl: new Ext.XTemplate(
              	   '<tpl>',

    	          	//         	       'Country:<br>{[this.formatCountry(value)]}',
    	          	// 	               'Country:<br>{this.formatCountry(country)}',
//    	          	 	               'Country:<br>{country}',
    	 	          	         	   '<br>Event ID:<br>{[this.formatEventId(values.eventId)]}',
               	   '</tpl>',
               	   {
               		   formatEventId: function( eventId )
               		   {
               			   var retVal = "N/A";
               			   if ( eventId !== null && eventId !== undefined && eventId !== "" )
               			   {
               				   retVal = eventId;
               			   }
               			   return retVal;
               		   }
               	   }
              ),
              updateTemplate: function(record)
              {
            	  this.update(record);
              }
        }
//        {
//        	xtype: 'label',
//        	bind:
//        	{
//        		text: 'Event ID: {record.eventId}'
//        	},
////            setText: function(text, encode)
////            {
//////            	this.callParent();
////            	callParent();
////            }
////        	listeners:
////        	{
////        		'render': function(me, eopts)
////        		{
////        			console.log("in render listener...");
////        		}
////        	}
//        }
    ],
    updateTemplate: function(record)
    {
    	for (var x=0;x<this.items.items.length;x++)
    	{
    	  if ( typeof this.items.items[x].updateTemplate === 'function' )
    	  {
    		  this.items.items[x].updateTemplate(record);
    	  }
    	}
    },
//    listeners:
//    {
////    	'afterlayout': function(me,layout,eOpts)
//    	'beforerender': function(me, eOpts)
////    	'render': function(me, eOpts)
//    	{
////    		me.getHeader().setWidth('100%');
//    		me.getHeader().setStyle('white-space: normal;');
//    	}
//    }
})