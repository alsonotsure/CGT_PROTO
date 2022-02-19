Ext.define('CGT_PROTO.view.createEvent.CommentEditor', {
//	extend: 'Ext.form.field.HtmlEditor',
	extend: 'Ext.form.FieldContainer',
	mixins:
	[
	 'Ext.form.field.Field',
	 'Ext.util.StoreHolder'
	],
	xtype: 'commentEditor',
	name: 'eventComments',
	fieldLabel: 'Event Comments',
	labelPad: 15,
	layout:
	{
	  type: 'vbox'
	},
	inEditMode: false,
	initComponent: function()
	{
	  this.callParent();
	  var me = this;
	  this.store = Ext.create('Ext.data.Store');
	  var store = this.store;
	  
	var addComment = Ext.create({
		xtype: 'panel',
        layout:
        {
          type: 'card'
        },
        items:
        [
		  { 
			xtype: 'panel',
			itemId: 'addCommentsPanel',
			items:
			[
			 {
			   xtype: 'label',
			   text: 'No comments found.'
			 },
			 {
		       xtype: 'toolbar',
		       items:
					[
					  {
					    xtype: 'button',
					    text: 'Add Comment',
					    handler: function(button,eOpts)
					    {
							if (me.inEditMode)
							{
								Ext.Msg.show({
								    title:'Already in comment edit or add mode',
								    message: 'You can only edit or add one comment at a time. Please save or cancel comments.',
								    buttons: Ext.Msg.OK,
								    icon: Ext.Msg.WARNING
								});
							}	
							else
						    {
					          addComment.getLayout().setActiveItem('commentsAdd');
					          me.inEditMode = true;
						    }
					    }
					  }
					]
			 }
			]
	      },
		  {
			  xtype: 'panel',
			  layout: 
			  {
				type: 'vbox'
			  },
			  itemId: 'commentsAdd',
			  items:
			  [
			    { 
			      xtype: 'htmleditor',
			    }
			  ],
			  bbar: 
			  [
			    {
				  xtype: 'button',
				  text: 'Save',
				  handler: function(button, event)
				  {						  
					//TODO: Add Validators
					  
	                var comment = {};
	                comment.string = addComment.items.items[1].items.items[0].getValue();
	                var commentRecord = store.add(comment);
	                
	                addComment.getLayout().setActiveItem('addCommentsPanel');
	                
	                addComment.items.items[1].items.items[0].reset();
	                
	                var commentCount = store.getData().items.length;
	                var commentContainer = me.getCommentContainer(commentRecord[0]);
	                
	                var itemCount = me.items.items.length;
	                me.insert(itemCount-1, commentContainer);
	                
                    me.inEditMode = false;
                    
                    me.checkNumberComments();
			      }
			    },
				{
				  xtype: 'button',
				  text: 'Cancel',
				  handler: function(button,eOpts)
				  {
	                addComment.getLayout().setActiveItem('addCommentsPanel');
	                
	                addComment.items.items[1].items.items[0].reset();
	                
                    me.inEditMode = false;
				  }
			    }
			  ]
		  }

        ]
			    	
		});
	
	    this.addComment = addComment
	    this.add(addComment);
	},
    checkNumberComments: function()
    {
    	var noComments = false
    	if ( this.items.items.length === 1 )
        {
          noComments = true;
        }
		this.addComment.items.items[0].items.items[0].setVisible(noComments);
    },
	setValue: function(value)
	{		
		var commentEditorStore = this.getStore();
		var containers = [];
		for (var x=0;x<value.length;x++)
		{		
		  var commentRecord = commentEditorStore.add(value[x]);
		  containers[x] = this.getCommentContainer(commentRecord[0])	
			
		  this.insert(x, containers[x]);
		}
		commentEditorStore.commitChanges();
		
		this.checkNumberComments();
	},
	getValue: function()
	{
		var store = this.getStore();
		return store.getData().items;
	},
    isDirty: function()
    {
	  var store = this.getStore();
	  return store.getNewRecords().length > 0 || store.getUpdatedRecords().length > 0 || store.getRemovedRecords().length > 0;
    },
	getCommentContainer: function( commentRecord )
	{
		var me = this;
		var commentEditorStore = this.getStore();
		var container = new Ext.container.Container({
			  layout:
			  {
				type: 'card'  
			  },
			  items:
			  [
			    {
			      xtype: 'panel',
			      itemId: 'commentsView',
			      bbar: 
		  		  [
		   	        {
					  xtype: 'button',
					  text: 'Edit',
					  handler: function(button, event)
					  {
						if (me.inEditMode)
						{
							Ext.Msg.show({
							    title:'Already in comment edit or add mode',
							    message: 'You can only edit or add one comment at a time. Please save or cancel comments.',
							    buttons: Ext.Msg.OK,
							    icon: Ext.Msg.WARNING
							});
						}
						else 
						{  
						  container.getLayout().setActiveItem('commentsEdit');
                          me.inEditMode = true;
						}
					  }
					},
				    {
					  xtype: 'button',
					  text: 'Delete',
					  handler: function(button, event)
					  {
						me.remove(container);
						commentEditorStore.remove(commentRecord);
						me.checkNumberComments();
					  }
				    }
				  ],
				  html: commentRecord.data.string
			    },
			    {
			      xtype: 'panel',
			      layout: 
			      {
			    	type: 'vbox'
			      },
			      itemId: 'commentsEdit',
			      items:
			      [
				    { 
				      xtype: 'htmleditor',
				      value: commentRecord.data.string
				    }
			      ],
			      bbar: 
		  		  [
		   	        {
					  xtype: 'button',
					  text: 'Update',
					  handler: function(button, event)
					  {						  
						//TODO: Add Validators
	                    container.getLayout().setActiveItem('commentsView');
	                    var updatedComment = container.items.items[1].items.items[0].getValue();
	                    container.items.items[0].setHtml(updatedComment);
	                    container.items.items[1].items.items[0].originalValue = updatedComment;
	                    
	                    commentRecord.set('string', updatedComment);
	                    me.inEditMode = false;
					  }
					},
				    {
					  xtype: 'button',
					  text: 'Cancel',
					  handler: function(button,eOpts)
					  {
	                    container.getLayout().setActiveItem('commentsView');
	                    container.items.items[1].items.items[0].reset();
	                    me.inEditMode = false;
					  }
				    }
				  ],
			    }
			  ],
		  });
		
		return container;
	}
})