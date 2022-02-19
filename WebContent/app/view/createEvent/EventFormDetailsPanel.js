Ext.define('CGT_PROTO.view.createEvent.EventFormDetailsPanel',
{
  extend: 'CGT_PROTO.view.createEvent.EventFormPanel',
  requires:
  [
    'CGT_PROTO.view.createEvent.EventGeneralFieldSet',
    'CGT_PROTO.view.createEvent.EventTimesFieldSet'
  ],
//  flex:1,
//  defaults:
//  {
//    flex: 1
//  },
  xtype: 'eventFormDetailsPanel',
  title: 'Event Details',
  items:
  [
//   {
//   	xtype: 'eventTimesFieldSet',
////   	flex:1
//    },
    {
    	xtype: 'eventGeneralFieldSet',
//    	flex:1
    },
    {
       	xtype: 'eventTimesFieldSet',
//       	style:
//       	{
//       	  overflow: 'visible !important'	
//       	}
//       	flex:1
    }
  ]
});