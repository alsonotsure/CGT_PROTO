//  parseCountries =  function(value)
//  {
////	  var countries = Ext.data.JsonP(value);
//	  console.log("Test...")
//	  
//	  return Ext.data.JsonP.callback1(value);
//  };

Ext.define('CGT_PROTO.store.CountryStore', {
  extend: 'Ext.data.Store',
//  autoLoad: true,
//  autoLoad: false,
  fields:
  [
    {
      name: 'countryName', mapping: 'name'   
    },
    {
      name: 'countryCode', mapping: 'iso2Code'
    }
  ],
  storeId: 'countryStore',
//  proxy: {
//      type: 'jsonp',
//      callbackKey: 'prefix',
////	  type: 'json',
////      callbackKey: null,
//      limitParam: 'per_page',
//      
////      autoAppendParams: false,
////      url: 'http://api.worldbank.org/v2/country?format=jsonp',
////      url: 'http://api.worldbank.org/v2/country?format=json',
//      url: 'http://api.worldbank.org/v2/country?format=jsonp&prefix=parseCountries',
////      url: 'http://api.worldbank.org/v2/country?format=xml',
//      reader: {
//          type: 'json',
////          type: 'xml',
////          type: 'javascript',
////    	  type: 'text',
//
//          // Response is an array where element [1] is the array of records
//          getData: function(raw) {
//              return raw[1];
//          },
//          
////          headers: {'Accept' : 'application/json'},
//          
//      },
////      callback1: function()
////      {
////    	  console.log("Test...")
////      }
////	// Response is an array where element [1] is the array of records
////	getData: function(raw) {
////	    return raw[1];
////	}
//  },
  proxy: {
      type: 'ajax',
//      callbackKey: 'prefix',
//	  type: 'json',
//      callbackKey: null,
      cors: true,
      useDefaultXhrHeader: false,
      limitParam: 'per_page',
//      url: 'http://api.worldbank.org/v2/country?format=jsonp',
      url: 'http://api.worldbank.org/v2/country?format=json',
//      url: 'http://api.worldbank.org/v2/country?format=xml',
      reader: {
          type: 'json',
//          type: 'xml',
//          type: 'javascript',
//    	  type: 'text',

          // Response is an array where element [1] is the array of records
          getData: function(raw) {
              return raw[1];
          }
      }
  },
  sorters: {
	  property: 'name'
  },
  
  // Data includes aggregates which are not countries
  filters: {
      fn: function(rec) {
        return rec.get('region').value !== 'Aggregates'
      }
  },
  // Load whole dataset.
  // API only returns 25 by default.
  pageSize: 1000,
//  autoLoad: true,
  formatCountryString: function(countryCode)
  {
 		var countryString = "";
		if ( countryCode !== null && countryCode !== "" )
		{
    		var foundRecord = this.findRecord('countryCode', countryCode)
    		if ( foundRecord !== null && foundRecord)
    		{
    			countryString = foundRecord.get('countryName') + " (" + countryCode + ")";
    		}
    		else
    	    {
    			countryString = countryCode;
    	    }
		}
		return countryString;	  
  }
});