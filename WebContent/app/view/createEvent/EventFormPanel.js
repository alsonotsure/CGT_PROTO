Ext.define('CGT_PROTO.view.createEvent.EventFormPanel',
{
  xtype: 'eventFormPanel',
  extend: 'Ext.form.Panel',
//  height: '100%',
//  layout:
//  {
////	  type: 'fit'
//	  type: 'vbox',
//	  align: 'stretch'
//  },
//  flex: 1,
//  margin: '5 5 5 5',
  defaults:
  {
   margin: '5 5 5 5',
//   flex: 1
  },
//	border: 1,
//	style: {
//	    borderColor: 'red',
//	    borderStyle: 'solid'
//	},
  scrollable: true,
  getValidityStatus: function()
  {
//    var panels = this.items.items[0].items.items;
//	var panelItems = this.items.items;
//    for (var i=0;i<panelItems.length;i++)
//    {
      // determine if invalid fields are present on the tab
      var invalids = this.query("field{isValid()==false}");
 
      // set appropriate icons on the tabs
      if (invalids.length > 0) {
        this.setIcon('../extjs/build/classic/theme-material/resources/images/shared/icon-error.png');
      } else {
        this.setIcon(null);
      } 
//    }
  }
});