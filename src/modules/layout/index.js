import config from "config";
import log from "utils/log";

import angular from "angular-kernel";
import react from "react";

import Layout from "./Layout.jsx";

module.exports = angular.module("layout", [])
    .value("Layout", Layout)
	.run(function(){
		log.info("layout run!");
	});