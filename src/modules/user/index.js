import config from "config";
import log from "utils/log";

import angular from "angular-kernel";
import React from "react";

import UserMenuItem from "./UserMenuItem.jsx";

module.exports = angular.module("user", ["main"])
	.run(["sideBarManager", function(sideBarManager){
        var menuItem = React.createElement(UserMenuItem, {});
        sideBarManager.setChild(menuItem);

		log.info("user run!");
    }]);