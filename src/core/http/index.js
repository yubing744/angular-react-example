import config from "config";
import log from "utils/log";
import angular from "angular-kernel";

module.exports = angular.module("ngLayout", [])
	.run(function(){
		log.info("http run!");
	});	