import config from "config";
import log from "utils/log";
import { EventEmitter } from "events";

import React from "react";
import SideBar from "../views/SideBar.jsx";

import { combineReducers, createStore } from 'redux'

class SideBarManager extends EventEmitter {
    constructor() {
        super();
        this.init();
    }

    init() {
        let store = this.store = createStore(this.reducer.bind(this));
        store.dispatch.uuid = "123456";
        
        this.sideBar = React.createElement(SideBar, {
            store: store,
            actions: this.actions()
        });
    }

    actions() {
        return {
            setChild: this.setChild.bind(this)
        }
    }

    reducer(state, action) {
        log.info("action:" + action.type);

        switch(action.type) {
            case "SET_CHILD":
                log.info("SET CHILD:" + action.child);

                return {
                    child: "action.child"
                }
            default:

        }
    }

    getSideBar() {
        return this.sideBar;
    }

    setChild(child) {
        this.store.dispatch({
            type: 'SET_CHILD',
            child: child
        })
    }
}

module.exports = SideBarManager;