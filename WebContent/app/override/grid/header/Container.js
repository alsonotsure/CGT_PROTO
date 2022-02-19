Ext.define('CGT_PROTO.override.grid.header.Container',{
	override: 'Ext.grid.header.Container',
//Ext.override('view.grid.header.Container',{
//	extend: 'Ext.grid.header.Container',
	initComponent: function()
	{
		console.log("In override...")
		this.callParent();
	},
	 getMenuItems: function() {
		 var menuItems = this.callParent();
		 
//		 console.log(menuItems)
		 
		 var me = this;
		 if ( me.sortable )
		 {
			 Ext.Array.insert(menuItems, 2, 
					 [{
				 		itemId: 'removeSortItem',
		                text: 'Remove from Sort',
//		                iconCls: me.menuSortAscCls,
		                handler: me.onRemoveSortClick,
		                scope: me,
//		                disabled: true
					 }]);
		 }
		 
		 return menuItems;
		 
	 },
	    onRemoveSortClick: function() {
	        var menu = this.getMenu(),
	            activeHeader = menu.activeHeader;
	 
	        //TODO Need to remove sorter from store
	        var dataIndex = activeHeader.dataIndex;
	    	if( this.grid.getStore().getSorters().get(dataIndex) ){
	    		var sorter = this.grid.getStore().getSorters().get(dataIndex);
	    		this.grid.getStore().getSorters().remove(sorter);
	    	}
	        
	    	
	        activeHeader.setSortState(null);
//	        this.disableRemoveSort()
	        
//	        arguments[0].setDisabled(true); 
	    },
	    
	    onSortAscClick: function() {
	        
	    	this.callParent();
	    },
	 
	    // sort desc when clicking on item in menu
	    onSortDescClick: function() {
	 
	        this.callParent();
	        
	        
	    },
	    disableRemoveSort: function()
	    {
//	    	var menuItems = this.getMenuItems();
//	    	var removeFromSort = menuItems.getById("removeSortItem")
	    	var menu = this.getMenu();
	    	var removeFromSort = menu.down('#removeSortItem');
	    	if ( removeFromSort !== null && removeFromSort !== undefined ){
	    		removeFromSort.setDisabled(true);
	    	}
	    },
	    listeners:
	    	{
	    		'afterrender': function(me, eOpt)
	    		{
	    			var menu = me.getMenu();
	   
    				var removeFromSort = menu.down('#removeSortItem');
    				if (removeFromSort !== null && removeFromSort !== undefined )
    				{
	    			menu.on('beforeshow', function(menu)
	    			{
//	    				var removeFromSort = menu.down('#removeSortItem');
//	    				if (removeFromSort !== null && removeFromSort !== undefined )
//	    				{
		    				var disableRemoveSort = false;
		    				if ( menu.activeHeader.sortState === null )
		    				{
		    				  disableRemoveSort = true;
		    				}
	//	    				var removeFromSort = menu.down('#removeSortItem');
		    				removeFromSort.setDisabled(disableRemoveSort);
//	    				}
	    				console.log('in menu beforeshow...'+menu.activeHeader.sortState);
	    			});
    				}
	    		}
	    	}
});