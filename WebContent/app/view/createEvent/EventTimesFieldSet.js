Ext.define('CGT_PROTO.view.createEvent.EventTimesFieldSet', {
	extend: 'Ext.form.FieldSet',
	requires:
	[
	 'CGT_PROTO.view.createEvent.EventTimePeriodEditor',
	],
	xtype: 'eventTimesFieldSet',
	title: 'Times',
	collapsible: true,
	initComponent: function()
	{		
	  this.callParent();
//	  
//	  var activePeriodEditor = Ext.create(
//			  
//	  );
//	  
	  var editors = this.items.items;
	  for (var x=0;x<editors.length;x++)
	  {
		  var grid = editors[x].eventFormGrid;
		  grid.findPlugin('rowediting').on('beforeedit', function()
		  {
			for (var y=0;y<editors.length;y++){
			  if ( y !== x )
			  {
				editors[y].eventFormGrid.findPlugin('rowediting').cancelEdit();  
			  }
			}  
		  });
	  }
	},
	items:
    [
//		{
//		  xtype: 'eventActivePeriodEditor'
//		}
		{
		  xtype: 'eventTimePeriodEditor',
		  columnName: 'Active Period',
		  columnDataIndex: 'activePeriod',
		  name: 'activePeriod',
		  emptyText: 'No Active Periods.',
		  addButtonText: 'Add Active Period',
		  dataFields: 
		  [
		    'activePeriod' 
		  ],
//		  listeners:
//		  {
//			  'beforeedit': function()
//			  {
//				  return false;
//			  }
//		  }
		},
		{
			  xtype: 'eventTimePeriodEditor',
			  columnName: 'Flight Ban/Closure',
			  columnDataIndex: 'flightBan',
			  name: 'flightBan',
			  emptyText: 'No Flight Bans / Closure.',
			  addButtonText: 'Add Flight Ban / Closure',
			  dataFields: 
			  [
			    'flightBan' 
			  ]
			}
    ],
   	style:
   	{
   	  overflow: 'visible !important'	
   	},
    cls: 'overflowClass'
});