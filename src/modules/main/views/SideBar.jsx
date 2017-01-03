import config from "config";
import log from "utils/log";
import React from 'react'
import { Component, PropTypes, Children } from 'react'

var storeShape = PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
});

class SideBar extends Component {
    constructor(props, context) {
        super(props, context);

        this.store = props.store;
        this.store.subscribe(function(){
            console.log("ddddd");
        });
    }

    getChildContext() {
        return { store: this.store }
    }

    componentDidMount() {
        log.info("subscribe");

        this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
        this.handleChange();
    }

    componentWillUnmount() {
        log.info("unsubscribe");

        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    handleChange() {
        let state = this.store.getState()
        console.log(state);

        if (state) {
            this.setState(state);
        }
    }

    render() {
        if (this.state && this.state.child) {
            return this.state.child
        } else {
            return <div>SideBar</div>;
        }
    }
}

SideBar.propTypes = {
  store: storeShape.isRequired,
}

SideBar.childContextTypes = {
  store: storeShape.isRequired
}

module.exports = SideBar;
