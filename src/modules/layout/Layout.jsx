import config from "config";
import log from "utils/log";
import React from "react";

import "./Layout.css";

var AppLayout = React.createClass({
  render: function() {
    return (
        <div className="layout">
            <div className="header">
                {this.props.items.header}
            </div>
            <div className="container">
                <div className="sidebar">
                    {this.props.items.sidebar}
                </div>
                <div className="main">
                    {this.props.items.main}
                </div>
            </div>
            <div className="footer">
                {this.props.items.footer}
            </div>
        </div>
    )
  }
})

module.exports = AppLayout;