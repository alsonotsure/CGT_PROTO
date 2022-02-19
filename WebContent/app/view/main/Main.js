Ext.define('CGT_PROTO.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires:
    [
      'CGT_PROTO.view.main.MainContainer',
      'CGT_PROTO.view.main.MainMenu'
    ],
    xtype: 'main',
    layout:
    {
    	type: 'vbox',
    	align: 'stretch'
    },
    initComponent: function()
    {
      this.callParent();
      
      var mainContainer = Ext.create({
          xtype: 'mainContainer',
          flex: 1
      })

      var mainMenu = Ext.create({
          xtype: 'mainMenu',
          mainContainer: mainContainer
      })

      this.add(mainMenu);
      this.add(mainContainer);
    }
});