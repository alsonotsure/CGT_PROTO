Ext.define('CGT_PROTO.override.grid.filters.Filters',
{
  override: 'Ext.grid.filters.Filters',
  
  
  onMenuBeforeShow: function(menu)
  {
  	var headerCt = this.grid.headerCt;
	var headerMenu = headerCt.getMenu();
	var activeHeader = headerMenu.activeHeader;
	var filter = activeHeader.filter;
	var filterInHeader = filter.filterInHeader;
    if ( filterInHeader )
    {
    	if ( this.filterMenuItem )
        {
        	var parentTable = menu.up('tablepanel');
            var parentTableId = parentTable.id;
            var menuItem = this.filterMenuItem[parentTableId];
            menuItem.setVisible(false);
            
            if (this.sep) {
                this.sep.setVisible(false);
            }
        }
    }
    else
    {
    	this.callParent(arguments);
    }
  }
});