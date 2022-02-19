Ext.define('CGT_PROTO.ovveride.grid.filters.filter.header.String',
{
  extend: 'Ext.grid.filters.filter.String',
  alias: 'grid.filter.headerString',
  menu: {},
  filterInHeader: true,
  constructor: function(config)
  {
	  this.callParent([config]);
	  var me = this;
	  
      var inputItemConfig = Ext.apply({}, this.getItemDefaults());

      inputItemConfig.emptyText = this.config.emptyText || this.emptyText;
      inputItemConfig.triggers = 
      {
        clearText: 
        {
          cls: 'x-form-clear-trigger',
          handler: function()
          {  
        	me.setValue('')
          }
        }
      };
    
	this.inputItem = Ext.create(inputItemConfig);
	this.inputItem.on({
	    scope: this,
	    keyup: this.onValueChange,
	    el: {
	        click: function(e) {
	            e.stopPropagation();
	        }
	    }
	});

    this.menu.hide = function(){};    
    this.column.add(this.inputItem);
  }
});