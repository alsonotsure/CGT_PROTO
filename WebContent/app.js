/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CGT_PROTO.Application',

    name: 'CGT_PROTO',

    requires: [
        // This will automatically load all classes in the CGT_PROTO namespace
        // so that application classes do not need to require each other.
        'CGT_PROTO.*'
    ],

    // The name of the initial view to create.
    mainView: 'CGT_PROTO.view.main.Main',
    stores:
    [
      'CGT_PROTO.store.CountryStore'     
    ]    
});
