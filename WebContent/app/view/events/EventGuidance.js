Ext.define('CGT_PROTO.view.events.EventGuidance', {
	extend: 'Ext.dashboard.Dashboard',
	xtype: 'eventGuidance',
	columnWidth: 1,
//	stateful: true,
//	constrain: true,
	parts:
	{
	  guidanceA:
	  {
          viewTemplate: {
              title: 'Guidance A',
              items: [{
                  xtype: 'panel',
                  html: 'Guidance A',
//        	      constrainHeader: true
//    	          constrain: true
              }],          
//              constrain: true
              
          },
//          columnIndex: 0,
//          height: 50
	  },
	  guidanceB:
	  {
          viewTemplate: {
              title: 'Guidance B',
              items: [{
                  xtype: 'panel',
                  html: 'Guidance B'
              }]
          },
//          columnIndex: 0,
//          height: 50
	  },
	  guidanceC:
	  {
	      viewTemplate: {
	          title: 'Guidance C',
	          items: [{
	              xtype: 'panel',
	              html: 'Guidance C'
	          }]
	        },
	//        columnIndex: 0,
	//        height: 50
      }
	},
	defaultContent:
	  [
			{
	          type: 'guidanceA',
	          columnIndex: 0,
	          height: 50,
//	          config:
//	          {
//	        	  constrain: true
//	          }
//	          constrainHeader: true
//	          constrain: true
//              constrainTo: this.up('dashboard').el
			},
			{
	          type: 'guidanceB',
	          columnIndex: 0,
	          height: 50
			},
			{
	          type: 'guidanceC',
	          columnIndex: 0,
	          height: 50
			}
	  ],
//	  listeners:
//	  {
//		  'beforerender': function(me)
////		  'afterrender': function(me)
//		  {
//			  console.log('dashboard beforerender...')
//			  var dashContainer = me.items.items[0];
//			  for (var x=0;x<dashContainer.items.items.length;x++)
//			  {
//				  var view = dashContainer.items.items[x];
//				  console.log("view.isFloating() = " + view.isFloating() )
////				  view.constrain = true
////				  view.config.constrain = true
////				  view.config.constrainTo = me.getEl();
////				  view.config.constrainTo = dashContainer.getEl();
////				  view.constrainTo = dashContainer.getEl();
////				  view.constrainTo = view.container.el;
//			  }
//		  }
//	  }
});