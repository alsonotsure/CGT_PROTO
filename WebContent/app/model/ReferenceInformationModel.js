Ext.define('CGT_PROTO.model.ReferenceInformationModel', {
    extend: 'Ext.data.Model',
    fields:
        [
            {
                name: 'linkName',
                type: 'string'
            },
            {
                name: "href",
                type: "string"
            },
            {
            	name: "description",
            	type: "string"
            },
            {
            	name: "checked",
            	type: "boolean"
            }
        ], 
});