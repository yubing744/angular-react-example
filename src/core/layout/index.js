import config from "config";
import log from "utils/log";
import angular from "angular-kernel";
import react from "react";

module.exports = angular.module("ngLayout", [])
	.run(function(){
		log.info("layout run!");
	});	