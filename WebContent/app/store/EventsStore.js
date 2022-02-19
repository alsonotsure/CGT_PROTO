Ext.define('CGT_PROTO.store.EventsStore',{
    extend: 'Ext.data.Store',
    xtype: 'eventsStore',
    model: 'CGT_PROTO.model.EventModel',
    autoLoad: true,
    sorters:
    [
     {
    	property: 'onHotList',
    	direction: "DESC"
     }
    ],
    proxy:
    {
        type: 'ajax',
        reader:
        {
            type: 'json',
            rootProperty: 'events'
        },
        url: 'resources/data/Events.json'
    },
    listeners: 
    {
        load: function (store, records, successful, eOpts) {
            console.log("records = " + records);
        },
//        beforesort: function(me,sorters,eOpts)
//        {
////        	sorters.add({property:"onHotList", direction: "desc"});
////        	Ext.Array.insert(sorters,0,{property:"onHotList", direction: "desc"});
////        	sorters.insert(0,{property:"onHotList", direction: "desc"});
// 
////        	var onHotListSorter = Ext.create('Ext.util.Sorter',{property: "onHotList", direction: "desc", root: "data"})
////         	Ext.Array.insert(sorters,0,[onHotListSorter]);
//     
////        	sorters.push({property:"onHotList", direction: "desc"});
//        	
////        	sorters = [{property:"onHotList", direction: "desc"}];
//        	
////        	me.getSorters().clear();
////        	me.setSorters(sorters);
////        	me.sorters = sorters;
////        	Ext.Array.insert(me.getSorters().items,0,[onHotListSorter]);
////        	Ext.Array.insert(me.sorters,0,[onHotListSorter]);
////        	Ext.Array.insert(sorters,0,[onHotListSorter]);
////        	me.setSorters(sorters);
////        	sorters = [];
////        	this.callParent();
//        	
////        	Ext.Array.insert(me.getSorters().items,0,sorters);
////        	me.sorters.suspendEvent("add");
////        	me.suspendEvent("sort");
////        	me.sorters.beginUpdate();
////        	me.sorters.add({property: "onHotList", direction: "desc", root: "data"})
//        	me.sorters.addSort({property: "onHotList", direction: "desc", root: "data"})
////        	me.sorters.endUpdate();
////        	me.sorters.resumeEvent("add");
////        	me.resumeEvent("sort");
////        	me.getSorters().add({property: "onHotList", direction: "desc", root: "data"})
////        	me.getSorters().clear();
////        	me.setSorters(sorters)
//        }
        'update' :function(me, record, operation, modifiedFieldNames, details, eOpts)
        {
        	if ( operation === Ext.data.Model.COMMIT)
        	{
        		console.log('in store update listener...commit operation')
        		//Post to server, add mask
        	}
        	
        },
        'commit' :function()
        {
        	console.log('in store commit listener...')
        	
        }
    },
    sort: function (fields, direction, mode){
////    sort: function (fields, mode, direction){
//////    	sorters = ['onHotList', sorters];
////    	
//////    	sorters = [{property: "onHotList", direction: "desc", root: "data"}, sorters];
//////    	arguments.push('onHotList', 'DESC', 'append');
//////    	var fieldsArray = ['onHotList'];
//////    	fieldsArray.push(fields);
//////    	fields = fieldsArray;
//////    	
//////    	var directionArray = ['DESC'];
//////    	directionArray.push(direction);
//////    	direction = directionArray;
//////    	
//////    	var modeArray = ['prepend'];
//////    	modeArray.push(mode);
//////    	mode = modeArray;
////    	
//////    	var fieldsArray = [];
//////    	fieldsArray.push(fields, 'onHotList');
////////    	fieldsArray.push(fields, {property: "onHotList", direction: "DESC", root: "data", mode: 'prepend'});
////////    	fieldsArray.push(fields, {property: "onHotList", direction: "DESC", root: "data"});
//////    	fields = fieldsArray;
//////    	
//////    	var directionArray = [];
//////    	directionArray.push(direction, 'DESC');
//////    	direction = directionArray;
//////    	
//////    	var modeArray = [];
//////    	modeArray.push(mode, 'prepend');
//////    	mode = modeArray;
////    	
////    	
////////    	var fieldsArray = ['onHotList'];
//////    	var fieldsArray = [{property: "onHotList", direction: "DESC", root: "data"}];
//////    	fieldsArray.push({property: fields});
//////    	fields = fieldsArray;
//////    	    	
//////    	direction = mode;
//////    	
////    	this.sorters.add({property: "onHotList", direction: "DESC", root: "data"});
//    	
////    	var dirToToggle = "ASC";
////    	if( this.getSorters().get(fields) ){
////    		dirToToggle = this.getSorters().get(fields).toggle();
////    	}
//    	
//    	var dirToToggle = "ASC";
//    	if( this.getSorters().get(fields) ){
//    		this.getSorters().get(fields).toggle();
//    		dirToToggle = this.getSorters().get(fields).getDirection();
//    	}
//    	
//    	var fieldsArray = []
////    	fieldsArray.push({property: "onHotList", direction: "DESC", root: "data"},fields);
//    	fieldsArray.push({property: "onHotList", direction: "DESC", root: "data"},{property: fields, direction: dirToToggle});
//    	fields = fieldsArray;
////    	if( this.getSorters().get(fields) ){
////    		this.getSorters().get(fields).toggle();
////    	}
//    	
////    	if (this.sorters.mode === 'multi' )
//    	if (mode === 'multi' )
//    	{
//    		direction = "multi";
////    		direction = null;
//    	}
//    	
//    	this.callParent(arguments);
////    	this.sorters.addSort("onHotList","DESC","prepend")
//    	
////    	ayla
////    	this.sort({property: "onHotList", direction: "DESC", root: "data"});
    	
//    	if ( fields === "onHotList" )
//    	{
//    		mode = "prepend";
//    	}
    	
    	var newSorters = [];
    	var onHotListSorterIndex = this.getSorters().indexOfKey('onHotList')
    	if ( onHotListSorterIndex !== -1 && fields !== "onHotList")
    	{
    		newSorters.push({property: "onHotList", direction: this.getSorters().items[onHotListSorterIndex].getDirection()})
    	}
    	
    	var fieldsSorterDirection = direction;
    	if ( direction === null || direction === undefined )
    	{
    		var fieldsSorterIndex = this.getSorters().indexOfKey(fields);
    		if ( fieldsSorterIndex !== -1 )
    		{
    			this.getSorters().items[fieldsSorterIndex].toggle();
    			fieldsSorterDirection = this.getSorters().items[fieldsSorterIndex].getDirection();
    		}
    	}
    	
    	newSorters.push({property: fields, direction: fieldsSorterDirection});
//    	var newSorters = [{property: 'onHotList', direction: 'DESC'}, {property: fields, direction: "DESC"}];
    	fields = newSorters;
    	direction = mode;
    	
    	
    	this.callParent(arguments);
    }
//    getSetters: function(autoCreate)
//    {
//    	this.callParent(arguments);
//    	this.sorters.add({property: "onHotList", direction: "DESC", root: "data"});
//    }
})