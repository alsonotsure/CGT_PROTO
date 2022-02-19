Ext.define('CGT_PROTO.view.main.DarkModeSelector', {
    extend: 'Ext.panel.Panel',
    xtype: 'darkModeSelector',
    layout: 'hbox',
    items:
    [
        {
            xtype: 'checkbox',
            boxLabel: 'Dark Mode',
            listeners:
            {
                change: function(me, newValue, oldValue, eOpts)
                {
//                	Ext.manifest.material.toolbar = true;
                	
                    var setDarkMode = false;
                    if (newValue)
                    {
                        setDarkMode = true;
                    }
                    Ext.theme.Material.setColors({
                        'darkMode': setDarkMode
                    });
                    
//                    Ext.theme.Material.setColors({
//                        'darkMode': setDarkMode,
////                        'base': base || me._materialBaseColor,
////                        'accent': accent || me._materialAccentColor
////                        'base': me._materialBaseColor,
////                        'accent': me._materialAccentColor
//                        'base': 'blue',
//                        'accent': 'red'
//                    });
                    
                    Ext.getBody().toggleCls('dark-mode', setDarkMode);
////                    checkbox.ownerCt.hide();
////                },
//
////                updateMaterialTheme: function(darkMode, base, accent) {
////                    var me = this;
//
////                    if (Ext.theme.Material) {
////                        Ext.theme.Material.setColors({
////                            'darkMode': setDarkMode,
////                            'base': base || me._materialBaseColor,
////                            'accent': accent || me._materialAccentColor
////                        });
////                    }
//
////                    if (base) {
////                        me._materialBaseColor = base;
////                    }
////
////                    if (accent) {
////                        me._materialAccentColor = accent;
////                    }
//                    
//                    
////                    Ext.ux.theme.Material.setColors({
////                    	'darkMode': setDarkMode
////                    })
                }
            }
        }
    ]
});