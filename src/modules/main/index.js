import config from "config";
import log from "utils/log";
import angular from "angular-kernel";
import React from "react";

import Header from "./views/Header.jsx";
import SideBarManager from "./services/SideBarManager";
import Main from "./views/Main.jsx";
import Footer from "./views/Footer.jsx";

module.exports = angular.module("main", [])
    .service("header", function(){
		return React.createElement(Header, {});
	})
	.service("sideBarManager", function(){
		return new SideBarManager();
	})
	.service("main", function(){
		return React.createElement(Main, {});
	})
	.service("footer", function(){
		return React.createElement(Footer, {});
	})
	.run(function(){
		log.info("main run!");
	});