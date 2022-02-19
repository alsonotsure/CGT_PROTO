Ext.define('CGT_PROTO.view.createEvent.EventFormReferenceInfoPanel',
{
  extend: 'CGT_PROTO.view.createEvent.EventFormPanel',
  requires:
  [
    'CGT_PROTO.view.createEvent.ReferenceInformationEditor'
  ],
  xtype: 'eventFormReferenceInfoPanel',
  title: 'Reference Information',
  layout:
  {
    type : 'fit'
  },
  items:
  [
    {
    	xtype: 'referenceInformationEditor'
    }
  ]
});