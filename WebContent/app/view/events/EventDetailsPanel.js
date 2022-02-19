Ext.define('CGT_PROTO.view.events.EventDetailsPanel', {
	extend: 'Ext.panel.Panel',
	xtype: 'eventDetailsPanel',
	requires:
	[
//		'Ext.dashboard.Dashboard'
	  'CGT_PROTO.view.events.EventGuidance'
	],
	items:
	[
//	  {
//		  xtype: 'dashboard',
//		  parts:
//		  {
//			  
//		  }
//	  }  
      {
    	xtype: 'eventGuidance'
    	
      }
	]
	
});