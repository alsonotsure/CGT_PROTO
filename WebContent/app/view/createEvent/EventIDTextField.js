Ext.define('CGT_PROTO.view.createEvent.EventIDTextField', {
	extend: 'Ext.form.field.Text',
	xtype: 'eventIDTextField',
	fieldLabel: 'Event ID:',
//	bind:
//	{
////		value: '{rec.eventId}'
//		value: 'Hello {eventsGrid}'
//	},
	name: 'eventId',
	allowBlank: false
})