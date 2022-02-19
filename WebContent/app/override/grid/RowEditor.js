Ext.define('CGT_PROTO.override.grid.RowEditor',{
	override: 'Ext.grid.RowEditor',
//	floating: true,
//	scrollable: true,
//	renderTo: 'createEventForm',
	// determines the amount by which the row editor will overflow, and flips the buttons
    // to the top of the editor if the required scroll amount is greater than the available
    // scroll space. Returns the scrollDelta required to scroll the editor into view after
    // adjusting the button position.
//    syncButtonPosition: function(context) {
//        var me = this,
//            scrollDelta = me.getScrollDelta(),
//            floatingButtons = me.getFloatingButtons(),
//            // If this is negative, it means we're not scrolling so lets just ignore it
//            scrollHeight = Math.max(0, me.scroller.getSize().y - me.scroller.getClientSize().y),
//            overflow = scrollDelta - (scrollHeight - me.scroller.getPosition().y);
// 
//        floatingButtons.show();
// 
//        // If that's the last visible row, buttons should be at the top regardless of scrolling,
//        // but not if there is just one row which is both first and last.
////        if (overflow > 0 || (context.rowIdx > 1 && context.isLastRenderedRow())) {
////        if (overflow > 0 || (context.rowIdx > 0 && context.isLastRenderedRow())) {
////        if (overflow > 0 || (context.rowIdx > 2 && context.isLastRenderedRow())) {
//        if (overflow > 0 || (context.rowIdx > 4 && context.isLastRenderedRow())) {
//            if (!me._buttonsOnTop) {
//                floatingButtons.setButtonPosition('top');
//                me._buttonsOnTop = true;
//                me.layout.setAlign('bottom');
//                me.updateLayout();
//            }
// 
//            scrollDelta = 0;
//        }
//        else if (me._buttonsOnTop !== false) {
//            floatingButtons.setButtonPosition('bottom');
//            me._buttonsOnTop = false;
//            me.layout.setAlign('top');
//            me.updateLayout();
//        }
//        // Ensure button Y position is synced with Editor height even if button
//        // orientation doesn't change
//        else {
//            floatingButtons.setButtonPosition(floatingButtons.position);
//        }
// 
//        return scrollDelta;
//    },
    
//    syncEditorClip: function() {
//        // Since the editor is rendered to the grid el, all its visible parts must be clipped
//        // when scrolled outside of the grid view area so that it does not overlap the scrollbar
//        // or docked items.
//        var me = this,
//            tip = me.tooltip,
//            // Clipping region must be *within* scrollbars, so in the case of locking view,
//            // we cannot use the lockingView's el because that *contains* two grids.
//            // We must use the scroller el.
//            clipRegion = me.scroller.getElement().getConstrainRegion();
// 
//        me.clipTo(clipRegion);
//        me.floatingButtons.clipTo(clipRegion);
// 
//        if (tip && tip.isVisible()) {
//            tip.clipTo(clipRegion, 5);
//        }
//    },
});