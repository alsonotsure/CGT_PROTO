Ext.define('CGT_PROTO.view.events.EventDetails',{
    extend: 'Ext.container.Container',
    requires:
    [
      'CGT_PROTO.view.events.EventSummary',
      'CGT_PROTO.view.events.EventDetailsPanel'
    ],
    xtype: 'eventDetails',
    layout: 'border',
//    height: 100,
    height: 300,
    items:
    [
        {
            xtype: 'eventSummary',
            region: 'west',
            flex: 3
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            flex: 7,
//            height: 300,
            items:
            [
//                {
//                    xtype: 'panel',
//                    title: 'Sensor 1',
//                    bind:
//                    {
//                      html: 'Sensor 1 {record.title}'
//                    }
//                },
//                {
//                    xtype: 'panel',
//                    title: 'Sensor 2',
//                    bind:
//                    {
//                      html: 'Sensor 2 {record.title}'
//                    }
//                }
                {
                    xtype: 'eventDetailsPanel',
                    title: 'Sensor 1'
                },
                {
                    xtype: 'eventDetailsPanel',
                    title: 'Sensor 2'
                }
            ]
        }
    ],
	listeners:
	{
//		  'beforerender': function(me)
////		  'afterrender': function(me)
//		  {
//			  console.log('dashboard beforerender...')
//			  var dashboards = me.items.items[1].items.items;
//			  for (var x=0;x<dashboards.length;x++)
//			  {
////				  dashboards[x].items.items[0].dd.ddGroup = me.getId() + '_dropZone'
//				  dashboards[x].items.items[0].dropConfig = {'ddGroup' : me.getId() + '_dropZone'};
////				  var parts = dashboards[x].items.items[0].getParts().items;
////				  for ( var y=0;y<parts.length;y++)
////			      {
//////					parts[y].getViewTemplate().template.items[0].constrain = true;
////					  
//////					parts[y].getViewTemplate().template.prototype.constrainTo = parts[y].getViewTemplate().template.config.dashboard.getEl()
//////				    parts[y].getViewTemplate().template.prototype.constrainTo = parts[y].getViewTemplate().template.dashboard.getEl()
//////					  parts[y].getViewTemplate().template.getPrototype().constrainTo = dashboards[x].getEl()
//////					  parts[y].getViewTemplate().constrainTo = dashboards[x].getEl()
//////					  parts[y].getViewTemplate().template.constrainTo = dashboards[x].getEl()
//////					  parts[y].getViewTemplate().prototype.constrainTo = dashboards[x].getEl()
//////					  parts[y].getViewTemplate().constrainTo = dashboards[x].getEl()
////					  
//////					  parts[y].ddGroup = me.getId() + '_dropZone';
//////				      parts[y].draggable.ddGroup = me.getId() + '_dropZone';
//////				      parts[y].getViewTemplate().draggable = {'ddGroup' : me.getId() + '_dropZone'};
////					  parts[y].getViewTemplate().template.draggable = {'ddGroup' : me.getId() + '_dropZone'};
////			      }
//			  }
//		  },
		  'afterrender': function(me)
		  {
			  console.log('dashboard afterrender...')
			  var dashboards = me.items.items[1].items.items;
			  for (var x=0;x<dashboards.length;x++)
			  {
//				  dashboards[x].items.items[0].dropConfig = {'ddGroup' : me.getId() + '_dropZone'};
				  var columns = dashboards[x].items.items[0].items.items;
				  for ( var y=0;y<columns.length;y++)
			      {
//					  var dashboardPanels = columns.items.items;
					  var dashboardPanels = columns[y].items.items;
					  for (var z=0;z<dashboardPanels.length;z++)
					  {
//						  dashboardPanels[z].draggable.ddGroup = me.getId() + '_dropZone';
						  
//						  dashboardPanels[z].constrainHeader = true;
//						  dashboardPanels[z].constrainTo = dashboards[x].items.items[0].getEl();
//						  dashboardPanels[z].constrain = true;
//						  dashboardPanels[z].draggable.constrainTo = me.getEl();
						  dashboardPanels[z].draggable.startDrag = function(){ this.constrainTo(me.getEl()) };
					  }
			      }
			  }
		  }
		
	}
})