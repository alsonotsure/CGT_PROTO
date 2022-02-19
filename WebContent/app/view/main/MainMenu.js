Ext.define('CGT_PROTO.view.main.MainMenu', {
    extend: 'Ext.panel.Panel',
    requires:
    [
      'CGT_PROTO.view.main.DarkModeSelector'
    ],
    xtype: 'mainMenu',
    layout:
    {
      type: 'hbox',
      align: 'stretchmax'
    },
    padding: '0 5 0 5',
    initComponent: function()
    {
        this.callParent();

        var me = this;
        var innerContainer = Ext.create({
            xtype: 'container',
            flex: 1,
            layout:
            {
                type: 'hbox',
                align: 'middle'
            },

            defaults:
            {
              padding: '0 5 0 5'
            },
            items:
            [
                {
                    xtype: 'button',
                    text: 'Home',
                    handler: function()
                    {
                        me.mainContainer.getLayout().setActiveItem('eventGrid');
                    }
                },
                {
                    xtype: 'button',
                    text: 'Create Event',
                    handler: function()
                    {
                        me.mainContainer.getLayout().setActiveItem('createEvent');
                    }
                }
           ]
        })

        var darkModeSelector = Ext.create({
            xtype: 'darkModeSelector'
        });

        this.add(innerContainer);
        this.add(darkModeSelector);
    }
});