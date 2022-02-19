Ext.define('CGT_PROTO.view.createEvent.CGT_PROTOTimefield',
{
	extend: 'Ext.form.field.Time',
    xtype: 'cgt_protoTimefield',
    minValue: '00:00:00',
    maxValue: '23:59:59',
    increment: 1,
    format: 'H:i:s'
});