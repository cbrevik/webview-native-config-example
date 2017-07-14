package com.overridenativeconfig;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {
    private WritableMap mParams;

    public NavigationCompletedEvent(int viewTag, WritableMap params) {
        super(viewTag);
        this.mParams = params;
    }

    @Override
    public String getEventName() {
        return "navigationCompleted";
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        init(getViewTag());
        rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);
    }
}
