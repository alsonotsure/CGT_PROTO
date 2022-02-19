Ext.define('CGT_PROTO.view.createEvent.EventCountryDropDown', {
  extend: 'Ext.form.field.ComboBox',
//  requires:
//  [
//    'CGT_PROTO.store.CountryStore' 
//  ],
  xtype: 'eventCountryDropDown',
  fieldLabel: 'Select Country:',
//  renderTo: 'remoteLoadedCombo',
//  displayField: 'name',
//  valueField: 'country',
  displayField: 'countryName',
  valueField: 'countryCode',
//  width: 500,
//  labelWidth: 130,
//  store: countryStore,
  queryMode: 'local',
  name: 'country',
  forceSelection: true,
//  isTextInput: false,
//  editable: false,
  
//  enforceMaxLength: true,
//  typeAhead: true,
//  allowBlank: false,
  
  initComponent: function()
  {
	  
	  var countryStore = Ext.data.StoreManager.lookup('countryStore');
	  this.store = countryStore;
	  
	  this.callParent();
  }
//  store: Ext.data.StoreManager.lookup('countryStore'),
//  store: Ext.create('CGT_PROTO.store.CountryStore')
//  store:
//  {
////	  model:
////	  {
//		fields:
//		[
//		  {
//		    name: 'countryName', mapping: 'name'   
//		  },
//		  {
//		    name: 'countryCode', mapping: 'iso2Code'
//		  }
//		],
////	  },
//	  proxy: {
//	      type: 'jsonp',
//	      callbackKey: 'prefix',
//	      limitParam: 'per_page',
////	      url: 'http://api.worldbank.org/countries?format=jsonp',
//	      url: 'http://api.worldbank.org/v2/country?format=jsonp',
////	      url: 'http://api.worldbank.org/v2/country',
//	      reader: {
//	          type: 'json',
//	
//	          // Response is an array where element [1] is the array of records
//	          getData: function(raw) {
//	              return raw[1];
//	          }
////	          getData: function(raw) {
//////	              return raw[1];
////	        	  if ( raw[2] === 'Aggregates' )
////	        	  {
////	        		  return
////	        	  }
////	        	  else
////	        	  {
////	        		  return raw[1]
////	        	  }
////	          }
//	      }
//	  },
//	  sorters: {
////	      property: 'region'
//		  property: 'name'
//	  },
//	  
//	  // Data includes aggregates which are not countries
//	  filters: {
//	      fn: function(rec) {
////	          return rec.get('region') !== 'Aggregates'
//	          return rec.get('region').value !== 'Aggregates'
//	      }
//	  },
//	  // Load whole dataset.
//	  // API only returns 25 by default.
//	  pageSize: 1000,
//	  autoLoad: true
//  }
});