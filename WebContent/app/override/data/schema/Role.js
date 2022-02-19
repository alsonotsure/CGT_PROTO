Ext.define('CGT_PROTO.override.data.schema.Role', {
  override: 'Ext.data.schema.Role',
  
  read: function(record, data, fromReader, readOptions)
  {
	if ( data[this.getterName] && Ext.isArray(data[this.getterName]) )
    {
	  var copyData = [];
	  for( var x=0;x<data[this.getterName].length;x++)
	  {
	    if ( data[this.getterName][x] !== null )
	    {
	    	copyData.push(data[this.getterName][x]);
	    }
	  }
	  data[this.getterName] = copyData;
    }
	return this.callParent(arguments);  
  }
});