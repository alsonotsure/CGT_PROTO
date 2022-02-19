//Ext.define('CGT_PROTO.model.TimePeriodModel', {
//    extend: 'Ext.data.Model',
//    schema: {
//        namespace: 'CGT_PROTO.model'
//    },
//    fields:
//    [
//        {
//            name: 'start',
//            type: 'date',
//            dateFormat: "Y-m-dTH:i:s"
//        },
//        {
//            name: "end",
//            type: "date",
//            dateFormat: "Y-m-dTH:i:s"
//        }
//    ],
//    formatTimePeriods: function(activePeriods)
//    {
//    	console.log(activePeriods)
//    	var retValue = "";
//    	var lineBreak = "";
//    	for (var x=0;x<activePeriods.length;x++)
//    	{
//    		retValue = retValue + lineBreak + Ext.Date.parse(activePeriods[x].start, "Y-m-d H:i:s") + " - " + Ext.Date.parse(activePeriods[x].end, "Y-m-d H:i:s");
//    	}
//    	
//    	return retValue;
//    }
//})



Ext.define('CGT_PROTO.model.EventModel', {
    extend: 'Ext.data.Model',
    requires:
    [
      'CGT_PROTO.model.TimePeriodModel',
//      'CGT_PROTO.field.Comments',
      'CGT_PROTO.model.ReferenceInformationModel'
    ],
//    schema: {
//        namespace: 'CGT_PROTO.model'
//    },
    fields:
    [
        {
            name: 'eventId',
            type: 'string'
        },
        {
            name: "title",
            type: "string"
        },
        {
        	name: "onHotList",
        	type: "boolean",
        	defaultValue: false
        },
//        {
//        	name: 'activePeriod',
//        	reference: "CGT_PROTO.model.TimePeriodModel"
////        	reference: "activePeriod",
////        	type: 'TimePeriodModel'
//        },
        {
        	name: "country",
        	type: "string"
        },
//        {
//        	name: "eventComments",
//        	type: "string"
//        }
        {
        	name: "eventComments",
        	mapping: "comments.events"
        }
    ],
    hasMany:
    [
//     	{name: 'activePeriod', model: 'CGT_PROTO.model.TimePeriodModel', associatedName: 'activePeriod'}
//     	{name: 'activePeriod', model: 'CGT_PROTO.model.TimePeriodModel', foreignKey: 'activePeriod'}
//     	{name: 'activePeriod', model: 'CGT_PROTO.model.TimePeriodModel', reference: 'activePeriod'}
		{name: 'activePeriod', model: 'CGT_PROTO.model.TimePeriodModel'},
		{name: 'flightBan', model: 'CGT_PROTO.model.TimePeriodModel'},
		{name: 'links', model: 'CGT_PROTO.model.ReferenceInformationModel'}
//		{name: 'activePeriod', model: 'CGT_PROTO.model.TimePeriodModel', associationKey: 'activePeriod'},
//		{name: 'activePeriodData', model: 'CGT_PROTO.model.TimePeriodModel', associatedName: 'activePeriod'},
//		{name: 'activePeriod', model: 'TimePeriodModel', associatedName: 'activePeriod'}
//		{name: 'activePeriod', model: 'TimePeriodModel'},
//		{name: 'activePeriod', model: 'TimePeriodModel', associationKey: 'activePeriod'}
//		{name: 'activePeriod', model: 'CGT_PROTO.model.TimePeriodModel', associationKey: 'activePeriod'}
//        {model: 'CGT_PROTO.model.TimePeriodModel', name: 'activePeriod', associationKey: 'activePeriod'}
    ]
})