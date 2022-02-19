Ext.define('CGT_PROTO.view.main.MainContainer', {
    extend: 'Ext.container.Container',
    requires:
    [
      'CGT_PROTO.view.events.EventsGrid',
      'CGT_PROTO.view.createEvent.CreateEventForm'
    ],
    xtype: 'mainContainer',
    layout: 'card',
//    viewModel: true,
    items:
    [
      {
          xtype: 'eventsGrid',
          itemId: 'eventGrid',
//          reference: 'eventsGrid'
      },
      {
          xtype: 'createEventForm',
          itemId: 'createEvent'
      }
    ]
});