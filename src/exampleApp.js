import config from "config";
import log from "utils/log";

import angular from "angular-kernel";
import React from "react";
import ReactDom from "react-dom";

import layout from "modules/layout"
import main from "modules/main"

module.exports = angular.module("example-app", [
		layout.name, main.name
	])
	.service("layout", ["Layout", "header", "sideBarManager", "main", "footer", function(Layout, header, sideBarManager, main, footer){
		var layoutProps = {
			width: window.innerWidth,
      		height: window.innerHeight,
			items: {
				header: header,
				sidebar: sideBarManager.getSideBar(),
				main: main,
				footer: footer
			}
		};

		return React.createElement(Layout, layoutProps);
	}])
	.run(["layout",  function(layout){
		log.info("app run!");

		var appEle = document.getElementById("app");
		ReactDom.render(layout, appEle);

		// 加载用户模块
		require.ensure([], function(require) {
			var userModule = require("modules/user");
			angular.injector([userModule.name]);
		}, "modules/example-user");
	}]);