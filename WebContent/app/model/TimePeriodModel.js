Ext.define('CGT_PROTO.model.TimePeriodModel', {
    extend: 'Ext.data.Model',
//    schema: {
//        namespace: 'CGT_PROTO.model'
//    },
    fields:
    [
        {
            name: 'start',
            type: 'date',
//            dateFormat: "Y-m-dTH:i:s"
        },
        {
            name: "end",
            type: "date",
//            dateFormat: "Y-m-dTH:i:s"
        },
        {
        	name: "qualifier",
        	type: "string",
        	allowNull: true
        }
    ],
//    fields:
//        [
//         	'start', 'end'
//        ],
    
    proxy: //Adding proxy because when associated to a null object a proxy call is made to the wrong address.  Seems harmless, but a 404 is generated as a result.
    {
        type: 'ajax',
//        reader:
//        {
//            type: 'json',
//            rootProperty: 'events'
//        },
//        url: 'app/data/Events.json'
        url: 'app/model/TimePeriodModel.js',
//        autoLoad: false
    },
    formatTimePeriods: function(timePeriods)
    {
    	console.log(timePeriods)
    	var retValue = "";
    	var lineBreak = "";
//    	var formatString = "ddd, MMM DD YYYY, hh:mm:ss\\Z";
    	var formatString = "ddd, MMM DD YYYY, HH:mm:ss\\Z";
    	
    	for (var x=0;x<timePeriods.length;x++)
    	{
//    		retValue = retValue + lineBreak + Ext.Date.parse(timePeriods[x].get('start'), "Y-m-d H:i:s") + " - " + Ext.Date.parse(timePeriods[x].get('end'), "Y-m-d H:i:s");
//    		retValue = retValue + lineBreak + Ext.Date.parse(timePeriods[x].get('start')) + " - " + Ext.Date.parse(timePeriods[x].get('end'));
    		
    		var startDate = "N/A";
    		var endDate = "N/A";
    		var qualifier = "";
    		if ( timePeriods[x].get('qualifier') !== null && timePeriods[x].get('qualifier') !== undefined )
    		{
    			qualifier = timePeriods[x].get('qualifier');
    		}
    		
    		if ( timePeriods[x].get('start') !== null && timePeriods[x].get('start') !== undefined ){
    			startDate = moment.utc(timePeriods[x].get('start')).format(formatString);
    		}
    			
    		if ( timePeriods[x].get('end') !== null && timePeriods[x].get('end') !== undefined ){
    			endDate = moment.utc(timePeriods[x].get('end')).format(formatString);
    		}
    		if ( startDate !== "N/A" || endDate !== "N/A" )
    		{
        		retValue = retValue + lineBreak + startDate + " - " + endDate;
//        		if ( timePeriods[x].get('qualifier') !== null && timePeriods[x].get('qualifier') !== undefined && timePeriods[x].get('qualifier') !== "N/A")
//        		{
//        			retValue = retValue + " (" + timePeriods[x].get('qualifier') + ")";	
//        		}
        		if ( qualifier !== "" )
        		{
        			retValue = retValue + " (" + qualifier + ")";	
        		}
    		}
    		else
    		{
//    		    retValue = retValue + lineBreak;
//        		if ( timePeriods[x].get('qualifier') !== null && timePeriods[x].get('qualifier') !== undefined && timePeriods[x].get('qualifier') !== "N/A")
//        		{
//        			retValue = retValue + timePeriods[x].get('qualifier');	 
//        		}
        		if ( qualifier !== "" )
        		{
        			retValue = retValue + lineBreak + qualifier;	
        		}
    		}

    		
//    		retValue = retValue + lineBreak + moment.utc(timePeriods[x].get('start')).format(formatString) + " - " + moment.utc(timePeriods[x].get('end')).format(formatString);
//    		retValue = retValue + lineBreak + moment(timePeriods[x].get('start')).format() + " - " + Ext.Date.parse(timePeriods[x].get('end'));
//    		
//    		if ( timePeriods[x].get('qualifier') !== null && timePeriods[x].get('qualifier') !== undefined && timePeriods[x].get('qualifier') !== "N/A")
//    		{
//    			retValue = retValue + " (" + timePeriods[x].get('qualifier') + ")";	 
//    		}
    		
    		lineBreak = "<br>";
    	}
    	
    	return retValue;
    },
    //Maybe move this to the application level?
    getUTCDateTime: function(time)
    {
    	var retVal = time;
    	retVal = Ext.Date.utcToLocal(Ext.Date.parse(time));
    	
    	return retVal;
    }
})