Ext.define('CGT_PROTO.view.createEvent.EventGeneralFieldSet', {
	extend: 'Ext.form.FieldSet',
	requires:
	[
	 'CGT_PROTO.view.createEvent.EventIDTextField',
	 'CGT_PROTO.view.createEvent.EventTitleTextField',
//	 'CGT_PROTO.view.createEvent.EventActivePeriodFieldContainer',
	 'CGT_PROTO.view.createEvent.OnHotListCheckbox',
	 'CGT_PROTO.view.createEvent.EventCountryDropDown',
	 'CGT_PROTO.view.createEvent.CommentEditor',
//	 'CGT_PROTO.view.createEvent.ReferenceInformationEditor'
	],
	xtype: 'eventGeneralFieldSet',
	title: 'General Details',
	collapsible: true,
//	scrollable: true,
//	layout: 'fit',
//	margin: '5 5 5 5',
//	layout:
//	{
//		type: 'hbox',
//		align: 'stretch'
//	},
//	height: '100%',
//	flex: 1,
	items:
	[
//	 {
//		 xtype: 'eventIDTextField'
//	 },
//	 {
//		 xtype: 'eventTitleTextField'
//	 },
//     {
//		 xtype: 'eventActivePeriodFieldContainer'
//     },
//     {
//    	 xtype: 'tabpanel',
////    	 layout:
////    	 {
////    		type: 'fit' 
////    	 },
////    	 scrollable: true,
//    	 items:
//    	 [
//    	  	{
//    	  		title: 'General',
//    	  		items:
//    	  		[
//	        		 {
//	        			 xtype: 'eventIDTextField'
//	        		 },
//	        		 {
//	        			 xtype: 'eventTitleTextField'
//	        		 },
//	        		 {
//	        			 xtype: 'eventCountryDropDown'
//	        		 },
//	        		 {
//	        			 xtype: 'onHotListCheckbox'
//	        		 },
//	        		 {
//	        			 xtype: 'commentEditor'
//	        		 }
//    	  		]
//    	  	},
////    	  	{
////    	  		title: 'Collectors'
////    	  	},
////    	  	{
////    	  		title: 'Active Period(s)',
//////    	  		layout: 'fit',
////    	  		layout:
////    	  		{
////    	  			type: 'hbox',
////    	  			align: 'stretch'
////    	  		},
//////    	  		border: 1,
//////    	  		style: {
//////    	  		    borderColor: 'red',
//////    	  		    borderStyle: 'solid'
//////    	  		},
////    	  		items:
////    	  		[
////        	     {
////        			 xtype: 'eventActivePeriodFieldContainer'
////        	     }
////    	  		]
////    	  	},
//    	  	{
//    	  		title: "Reference Information",
//    	  		layout:
//    	  		{
////    	  			type: 'hbox',
////    	  			align: 'stretch'
//    	  			type: 'fit'
//    	  		},
////    	  		width: "100%",
////    	  		height: "100%",
////    	  		border: 1,
////    	  		style: {
////    	  		    borderColor: 'red',
////    	  		    borderStyle: 'solid'
////    	  		},
//    	  		items:
//    	  		[
//    	  		  {
//    	  		    xtype: 'referenceInformationEditor'
//    	  		  } 
//    	  		]
//    	  	}
//    	 ]
//     }

		{
		  xtype: 'eventIDTextField'
		},
		{
		  xtype: 'eventTitleTextField'
		},
		{
		  xtype: 'eventCountryDropDown'
		},
		{
		  xtype: 'onHotListCheckbox'
		},
		{
		  xtype: 'commentEditor'
		}
    ]
//    getValidityStatus: function()
//    {
//      var panels = this.items.items[0].items.items;
//      for (var i=0;i<panels.length;i++)
//      {
//    	    
//    	    // determine if invalid fields are present on the tab
//    	    var invalids = panels[i].query("field{isValid()==false}");
//    	 
//    	    // set appropriate icons on the tabs
//    	    if (invalids.length > 0) {
////    	        panels[i].setIcon('resources/images/error.png');
////    	        panels[i].setIcon('../extjs/build/examples/classic/shared/icons/fam/error.png');
//    	        panels[i].setIcon('../extjs/build/classic/theme-material/resources/images/shared/icon-error.png');
//    	    } else {
////    	        panels[i].setIcon('resources/images/check.png');
//    	        panels[i].setIcon(null);
//    	    } 
//      }
//    },
//    clearValidityStatus: function()
//    {
//      var panels = this.items.items[0].items.items;
//      for (var i=0;i<panels.length;i++)
//      {
//    	    
////    	    // determine if invalid fields are present on the tab
////    	    var invalids = panels[i].query("field{isValid()==false}");
////    	 
////    	    // set appropriate icons on the tabs
////    	    if (invalids.length > 0) {
//////    	        panels[i].setIcon('resources/images/error.png');
//////    	        panels[i].setIcon('../extjs/build/examples/classic/shared/icons/fam/error.png');
////    	        panels[i].setIcon('../extjs/build/classic/theme-material/resources/images/shared/icon-error.png');
////    	    } else {
//////    	        panels[i].setIcon('resources/images/check.png');
//    	        panels[i].setIcon(null);
////    	    } 
//      }
//    }
})